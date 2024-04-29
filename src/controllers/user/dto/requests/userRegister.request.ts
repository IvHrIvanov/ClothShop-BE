import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRegisterRequest {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: 'string', required: true })
  userEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', required: true })
  userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', required: true })
  userPassword: string;
}
