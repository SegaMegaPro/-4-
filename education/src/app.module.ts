import { Module } from '@nestjs/common';
import {CarsModule} from "./cars/cars.module";
import {DatasourceModule} from "./datasource/datasource.module";
import {Cars_servicesModule} from "./cars_services/cars_services.module";
import {WorkersModule} from "./workers/workers.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [CarsModule,
    DatasourceModule,
    Cars_servicesModule,
    WorkersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'education',
      host: 'localhost',
      synchronize: false,
      logging: 'all',
      entities: ['dist/**/*.entity{.ts,.js}'],
    })],
  controllers:[],
  providers:[],
})
export class AppModule {}
