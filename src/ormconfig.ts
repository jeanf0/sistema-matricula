import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '1236',
    database: 'testbackend',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}']
}