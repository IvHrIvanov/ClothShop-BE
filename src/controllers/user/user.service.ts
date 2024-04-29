import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRegisterRequest } from './dto/requests/userRegister.request';
import { HashService } from 'src/services/hash.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { RepositoryService } from 'src/repository/repository.service';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: RepositoryService,
    private readonly hashService: HashService,
  ) {}
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
