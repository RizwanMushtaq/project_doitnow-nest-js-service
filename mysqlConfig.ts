import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from './src/users/entities/user.entity';
import { Todo } from './src/todos/entities/todo.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

//database settings
// const mysqlConfig: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 8889,
//   username: 'root',
//   password: 'root',
//   database: 'doitnow',
//   entities: [User, Todo],
//   // entities: ['dist/src/**/*.entity.js'],
//   // entities: [__dirname + '/../**/*.entity{.ts,.js'],
//   synchronize: true,
// };

//cleardb url = mysql://bf972b71490aa6:c95ace94@eu-cdbr-west-03.cleardb.net/heroku_82da633c91a8c1f?reconnect=true

const mysqlConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, Todo],
  synchronize: true,
};

// const mysqlConfig: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: 'eu-cdbr-west-03.cleardb.net',
//   // port: 8000,
//   username: 'bf972b71490aa6',
//   password: 'c95ace94',
//   database: 'heroku_82da633c91a8c1f',
//   entities: [User, Todo],
//   synchronize: true,
// };

export default mysqlConfig;
