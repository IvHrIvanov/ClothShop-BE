import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  async sign(userDbId: number): Promise<string> {
    return jwt.sign({ userDbId }, process.env.SECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
  }
}
