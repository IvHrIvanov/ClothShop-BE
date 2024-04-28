import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class ProductTable1714081374740 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          new TableColumn({
            name: 'productId',
            type: 'int',
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'productStorageId',
            type: 'int',
          }),
          new TableColumn({
            name: 'productName',
            type: 'nvarchar',
            length: '50',
          }),
          new TableColumn({
            name: 'productSize',
            type: 'nvarchar',
            length: '10',
          }),
          new TableColumn({
            name: 'productPrice',
            type: 'decimal',
          }),
          new TableColumn({
            name: 'productType',
            type: 'nvarchar',
            length: '30',
          }),
          new TableColumn({
            name: 'productBrand',
            type: 'nvarchar',
            length: '30',
          }),
          new TableColumn({
            name: 'productDescription',
            type: 'nvarchar',
            length: '300',
          }),
          new TableColumn({
            name: 'productGender',
            type: 'nvarchar',
            length: '10',
          }),
          new TableColumn({
            name: 'productMaterial',
            type: 'nvarchar',
            length: '40',
          }),
          new TableColumn({
            name: 'productQuantity',
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
    await queryRunner.dropTable('products');
  }
}
