import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRegisterRequest } from './dto/requests/userRegister.request';
import { HashService } from 'src/services/hash.service';
import { RepositoryService } from 'src/repository/repository.service';
import { UserLoginRequest } from './dto/requests/userLogin.request';
import { TokenResponse } from './dto/response/token.response';
import { JwtService } from 'src/services/jwt.service';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: RepositoryService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}
  async userLogin(body: UserLoginRequest): Promise<TokenResponse> {
    const { userEmail, userPassword } = body;
    const userDb = await this.repository.user.findOne({
      where: { userEmail: userEmail },
    });
    if (!userDb) {
      throw new BadRequestException(`User with ${userEmail} not exist!`);
    }
    const checkPassword = await this.hashService.compare(
      userPassword,
      userDb.userPassword,
    );
    if (!checkPassword) {
      throw new BadRequestException('Incorrect credentials!');
    }

    const jwtToken = await this.jwtService.sign(userDb.userId);
    return new TokenResponse({ token: jwtToken });
  }
  async userRegister(body: UserRegisterRequest): Promise<void> {
    const { userEmail, userPassword, userName } = body;
    const userDb = await this.repository.user.findOne({
      where: { userEmail: userEmail },
    });
    if (userDb) {
      throw new BadRequestException(`User with ${userEmail} is exist!`);
    }
    const hashPassword = await this.hashService.hash(userPassword);
    const newUser = this.repository.user.create({
      userEmail: userEmail,
      userPassword: hashPassword,
      userName: userName,
    });
    await this.repository.user.save(newUser);
  }
}
