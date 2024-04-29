import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ServiceModule } from 'src/services/service.module';
import { UserService } from './user.service';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  imports: [RepositoryModule, ServiceModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
