import { Module } from '@nestjs/common';
import {CarsModule} from "./cars/cars.module";
import {DatasourceModule} from "./datasource/datasource.module";
import {Cars_servicesModule} from "./cars_services/cars_services.module";
import {WorkersModule} from "./workers/workers.module";

@Module({
  imports: [CarsModule, DatasourceModule, Cars_servicesModule, WorkersModule],
  controllers:[],
  providers:[],
})
export class AppModule {}
