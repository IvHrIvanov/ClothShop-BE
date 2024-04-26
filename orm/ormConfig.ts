import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { ProductEntity } from 'repository/entities/product.entity';

dotenv.config();

export const ormConfig: DataSourceOptions = {
  type: 'mssql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  synchronize: false,
  migrations: [path.join(__dirname, '../migrations/*.{js,ts}')],
  migrationsTransactionMode: 'each',
  migrationsRun: true,
  extra: {
    trustServerCertificate: true,
  },
};
