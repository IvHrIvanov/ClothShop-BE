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
import { StorageEntity } from './storage.entity';

export enum UserStorageRole {
  ADMIN = 'ADMIN',
  Employe = 'Employe',
  Client = 'Client',
}

@Entity()
export class UserStorageEntity {
  @PrimaryGeneratedColumn('increment', { name: 'userStorageId' })
  userStorageId: number;

  @ManyToOne(() => UserEntity, (user) => user.userId)
  @JoinColumn({ name: 'userStorageUserId', referencedColumnName: 'userId' })
  userStorageUserId: UserEntity;

  @ManyToOne(() => StorageEntity, (storage) => storage.storageId)
  @JoinColumn({
    name: 'userStorageStorageId',
    referencedColumnName: 'storageId',
  })
  userStorageStorageId: StorageEntity;

  @Column({ type: 'nvarchar', name: 'userStorageRole' })
  userStorageRole: UserStorageRole;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updatedAt',
    default: () => 'DATETIME()',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deletedAt', nullable: true })
  deletedAt: Date | undefined;
}
