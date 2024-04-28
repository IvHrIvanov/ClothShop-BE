import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('storages')
export class StorageEntity {
  @PrimaryGeneratedColumn('increment', { name: 'storageId' })
  storageId: number;

  @Column({ type: 'nvarchar', name: 'storageName' })
  storageName: string;

  @Column({ type: 'nvarchar', name: 'storageAddress' })
  storageAddress: string;

  @Column({ type: 'nvarchar', name: 'storagePhone' })
  storagePhone: string;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updatedAt',
    default: () => 'DATETIME()',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deletedAt', nullable: true })
  deletedAt: Date | undefined;
}
