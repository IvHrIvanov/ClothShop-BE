import { ApiProperty } from '@nestjs/swagger';

export class TokenResponse {
  @ApiProperty({ type: 'string', required: true })
  token: string;

  constructor(data: { token: string }) {
    Object.assign(this, data);
  }
}
