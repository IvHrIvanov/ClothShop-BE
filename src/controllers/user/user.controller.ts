import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { UserRegisterRequest } from './dto/requests/userRegister.request';
import { UserService } from './user.service';
import { UserLoginRequest } from './dto/requests/userLogin.request';
import { TokenResponse } from './dto/response/token.response';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  @ApiOkResponse({ type: TokenResponse })
  @ApiBody({ type: UserLoginRequest })
  async userLogin(@Body() body: UserLoginRequest): Promise<TokenResponse> {
    return await this.userService.userLogin(body);
  }

  @Post('/register')
  @ApiBody({ type: UserRegisterRequest })
  async userRegister(@Body() body: UserRegisterRequest): Promise<void> {
    return await this.userService.userRegister(body);
  }
}
