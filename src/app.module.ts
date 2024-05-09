import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ormConfig } from './orm/ormConfig';
import { ServiceModule } from './services/service.module';
import { ConfigModule } from '@nestjs/config';
import { RepositoryModule } from './repository/repository.module';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './controllers/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(ormConfig, {
          autoLoadEntities: true,
        }) as TypeOrmModuleOptions,
    }),
    RepositoryModule,
    ServiceModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
