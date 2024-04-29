import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StorageEntity } from './storage.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment', { name: 'productId' })
  productId: number;

  @Column({ type: 'nvarchar', name: 'productName' })
  productName: string;

  @ManyToOne(() => StorageEntity, (storage) => storage.storageId)
  @JoinColumn({ name: 'productStorageId', referencedColumnName: 'storageId' })
  productStorageId: StorageEntity;

  @Column({ type: 'nvarchar', name: 'productSize' })
  productSize: string;

  @Column({ type: 'decimal', name: 'productPrice' })
  productPrice: number;

  @Column({ type: 'nvarchar', name: 'productType' })
  productType: string;

  @Column({ type: 'nvarchar', name: 'productBrand' })
  productBrand: string;

  @Column({ type: 'nvarchar', name: 'productDescription' })
  productDescription: string;

  @Column({ type: 'nvarchar', name: 'productGender' })
  productGender: string;

  @Column({ type: 'nvarchar', name: 'productMaterial' })
  productMaterial: string;

  @Column({ type: 'int', name: 'productQuantity' })
  productQuantity: number;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updatedAt',
    default: () => 'DATETIME()',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deletedAt', nullable: true })
  deletedAt: Date | undefined;
}
