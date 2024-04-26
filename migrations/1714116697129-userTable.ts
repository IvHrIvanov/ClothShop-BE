import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class UserTable1714116697129 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          new TableColumn({
            name: 'userId',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'userEmail',
            type: 'nvarchar',
            length: '70',
            isUnique: true,
          }),
          new TableColumn({
            name: 'userName',
            type: 'nvarchar',
            length: '70',
            isUnique: true,
          }),
          new TableColumn({
            name: 'userPassword',
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
    await queryRunner.dropTable('users')
  }
}
