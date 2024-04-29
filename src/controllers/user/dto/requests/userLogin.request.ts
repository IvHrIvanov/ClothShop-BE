import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', required: true })
  userEmail: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', required: true })
  userPassword: string;
}
