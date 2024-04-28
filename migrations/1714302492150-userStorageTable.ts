import {
  Column,
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
} from 'typeorm';

export class UserStorageTable1714302492150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'userStorage',
        columns: [
          new TableColumn({
            name: 'userStorageId',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'userStorageUserId',
            type: 'int',
          }),
          new TableColumn({
            name: 'userStorageStorageId',
            type: 'int',
          }),
          new TableColumn({
            name: 'userStorageRole',
            type: 'nvarchar',
          }),
          new TableColumn({
            name: 'updatedAt',
            type: 'datetime',
            default: 'GETDATE()',
          }),
          new TableColumn({
            name: 'deletedAt',
            type: 'datetime',
            isNullable: true,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('userStorage');
  }
}
