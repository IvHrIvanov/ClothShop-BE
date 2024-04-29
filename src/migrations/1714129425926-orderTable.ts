import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class OrderTable1714129425926 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          new TableColumn({
            name: 'orderId',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'orderUserId',
            type: 'int',
          }),
          new TableColumn({
            name: 'orderNumber',
            type: 'int',
            isUnique: true,
            isGenerated: true,
          }),
          new TableColumn({
            name: 'orderDate',
            type: 'date',
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

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
