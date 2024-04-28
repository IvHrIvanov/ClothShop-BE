import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { StorageEntity } from './entities/storage.entity';
import { UserEntity } from './entities/user.entity';
import { OrderEntity } from './entities/order.entity';
import { ProductOrderEntity } from './entities/productOrder.entity';
import { UserStorageEntity } from './entities/userStorage.entity';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(UserEntity) public user: Repository<UserEntity>,
    @InjectRepository(ProductEntity) public product: Repository<ProductEntity>,
    @InjectRepository(StorageEntity) public storage: Repository<StorageEntity>,
    @InjectRepository(OrderEntity) public order: Repository<OrderEntity>,
    @InjectRepository(ProductOrderEntity)
    public productOrder: Repository<ProductOrderEntity>,
    @InjectRepository(UserStorageEntity)
    public userStorage: Repository<UserStorageEntity>,
  ) {}
}
