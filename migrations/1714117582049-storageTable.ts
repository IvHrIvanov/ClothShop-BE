import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class StorageTable1714117582049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'storages',
        columns: [
          new TableColumn({
            name: 'storageId',
            type: 'int',
            isGenerated: true,
            isUnique: true,
            isPrimary: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'storageName',
            type: 'nvarchar',
            isUnique: true,
            length: '30',
          }),
          new TableColumn({
            name: 'storageAddress',
            type: 'nvarchar',
            length: '50',
          }),
          new TableColumn({
            name: 'storagePhone',
            type: 'nvarchar',
            length: '10',
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
    await queryRunner.dropTable('storages');
  }
}
