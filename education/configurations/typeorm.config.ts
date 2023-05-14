import {DataSource} from "typeorm";

const ormConfig: DataSource = new DataSource(
    {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'education',
        username: 'postgres',
        password: 'postgres',
        entities: ['dist/**/*.entity{.ts,.js}'],
        logging: true,
        synchronize: false,
        migrationsTableName: 'migrations',
        migrations: ['dist/src/migrations/*{.ts,.js}'],
    }
);
export default ormConfig;