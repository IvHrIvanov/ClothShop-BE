import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class FK1714302664975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //FK UserStorage - Map
    await queryRunner.createForeignKeys('userStorage', [
      new TableForeignKey({
        columnNames: ['userStorageUserId'],
        referencedTableName: 'users',
        referencedColumnNames: ['userId'],
      }),
      new TableForeignKey({
        columnNames: ['userStorageStorageId'],
        referencedTableName: 'storages',
        referencedColumnNames: ['storageId'],
      }),
    ]);

    //FK ProductOrder - Map
    await queryRunner.createForeignKeys('productOrder', [
      new TableForeignKey({
        columnNames: ['productOrderProductId'],
        referencedTableName: 'products',
        referencedColumnNames: ['productId'],
      }),
      new TableForeignKey({
        columnNames: ['productOrderOrderId'],
        referencedTableName: 'orders',
        referencedColumnNames: ['orderId'],
      }),
    ]);

    //FK StorageTable -> ProductTable
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        columnNames: ['productStorageId'],
        referencedTableName: 'storages',
        referencedColumnNames: ['storageId'],
      }),
    );

    //FK OrderTable -> UserTable
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        columnNames: ['orderUserId'],
        referencedTableName: 'users',
        referencedColumnNames: ['userId'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
