import {Module} from "@nestjs/common";
import {Cars_services} from "./cars_services.entity";
import {Cars_servicesController} from "./cars_services.controller";
import {Cars_servicesService} from "./cars_services.service";
import {DatasourceModule} from "../datasource/datasource.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cars} from "../cars/cars.entity";

@Module(
    {
        controllers: [Cars_servicesController],
        providers: [Cars_servicesService],
        imports:[DatasourceModule,
        TypeOrmModule.forFeature([Cars_services,Cars])],
    }
)
export class Cars_servicesModule{}