import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment', { name: 'productId' })
  productId: number;

  @Column({ type: 'varchar', name: 'productName' })
  productName: string;
  @Column({ type: 'varchar', name: 'productSize' })
  productSize: string;
  @Column({ type: 'decimal', name: 'productPrice' })
  productPrice: number;
  @Column({ type: 'nvarchar', name: 'productPrice' })
  productType: string;
  @Column({ type: 'nvarchar', name: 'productPrice' })
  productBrand: string;
  @Column({ type: 'nvarchar', name: 'productPrice' })
  productDescription: string;
  @Column({ type: 'nvarchar', name: 'productPrice' })
  productGender: string;
  @Column({ type: 'nvarchar', name: 'productPrice' })
  productMaterial: string;
  @Column({ type: 'int', name: 'productPrice' })
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
