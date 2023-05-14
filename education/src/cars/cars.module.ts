import {Module} from "@nestjs/common";
import {Cars} from "./cars.entity";
import {CarsService} from "./cars.service";
import {CarsController} from "./cars.controller";
import {DatasourceModule} from "../datasource/datasource.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cars_services} from "../cars_services/cars_services.entity";

@Module({
        controllers: [CarsController],
        providers: [CarsService],
        imports: [DatasourceModule,
        TypeOrmModule.forFeature([Cars,Cars_services])],
    })
export class CarsModule{}