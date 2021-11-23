import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

const entitiyPath: string = process.env.DB_ENTITY_PATH || 'src/model/*.ts';

const ormconfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [entitiyPath],
  extra: { charset: 'utf8mb4_unicode_ci' },
};

export default ormconfig;
