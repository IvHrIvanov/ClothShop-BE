import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hash(input: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(input, saltOrRounds);
    return hash;
  }
  async compare(input: string, userDbPassword: string): Promise<boolean> {
    return await bcrypt.compare(input, userDbPassword);
  }
}
