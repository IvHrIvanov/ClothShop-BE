import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { name: 'userId' })
  userId: number;
  @Column({ type: 'nvarchar', name: 'userEmail' })
  userEmail: string;
  @Column({ type: 'nvarchar', name: 'userName' })
  userName: string;
  @Column({ type: 'nvarchar', name: 'userPassword' })
  userPassword: string;
  @UpdateDateColumn({
    type: 'datetime',
    name: 'updatedAt',
    default: () => 'DATETIME()',
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deletedAt', nullable: true })
  deletedAt: Date | undefined;
}
