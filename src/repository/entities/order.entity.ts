import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('increment', { name: 'orderId' })
  orderId: number;

  @ManyToOne(() => UserEntity, (user) => user.userId)
  @JoinColumn({ name: 'orderUserId', referencedColumnName: 'userId' })
  orderUserId: UserEntity;

  @Column({ type: 'int', name: 'orderNumber' })
  orderNumber: number;

  @Column({ type: 'date', name: 'orderDate' })
  orderDate: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updatedAt',
    default: () => 'DATETIME()',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deletedAt', nullable: true })
  deletedAt: Date | undefined;
}
