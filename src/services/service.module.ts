import { Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { JwtService } from './jwt.service';

@Module({
  exports: [HashService, JwtService],
  providers: [HashService, JwtService],
})
export class ServiceModule {}
