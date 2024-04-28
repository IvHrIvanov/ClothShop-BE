import {
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';

@Entity('productOrder')
export class ProductOrderEntity {
  @PrimaryGeneratedColumn('increment', { name: 'productOrderId' })
  productOrderId: number;

  @ManyToOne(() => ProductEntity, (product) => product.productId)
  @JoinColumn({
    name: 'productOrderProductId',
    referencedColumnName: 'productId',
  })
  productOrderProductId: ProductEntity;

  @ManyToOne(() => OrderEntity, (order) => order.orderId)
  @JoinColumn({ name: 'productOrderOrderId', referencedColumnName: 'orderId' })
  productOrderOrderId: OrderEntity;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updatedAt',
    default: () => 'DATETIME()',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deletedAt', nullable: true })
  deletedAt: Date | undefined;
}
