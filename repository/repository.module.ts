import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { StorageEntity } from './entities/storage.entity';
import { UserEntity } from './entities/user.entity';
import { OrderEntity } from './entities/order.entity';
import { ProductOrderEntity } from './entities/productOrder.entity';
import { UserStorageEntity } from './entities/userStorage.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ProductEntity,
      StorageEntity,
      OrderEntity,
      ProductOrderEntity,
      UserStorageEntity,
    ]),
  ],
  exports: [RepositoryService],
  providers: [RepositoryService],
})
export class RepositoryModule {}
