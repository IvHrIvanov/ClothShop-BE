import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserRegisterRequest } from './dto/requests/userRegister.request';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/register')
  @ApiBody({ type: UserRegisterRequest })
  async userRegister(@Body() body: UserRegisterRequest): Promise<void> {
    this.userService.userRegister(body);
  }
}
