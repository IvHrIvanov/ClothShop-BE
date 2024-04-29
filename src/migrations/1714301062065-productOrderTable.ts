import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class UserOrderTable1714301062065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productOrder',
        columns: [
          new TableColumn({
            name: 'productOrderId',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'productOrderProductId',
            type: 'int',
          }),
          new TableColumn({
            name: 'productOrderOrderId',
            type: 'int',
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
    await queryRunner.dropTable('productOrder')
  }
}
