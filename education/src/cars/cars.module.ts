import {Module} from "@nestjs/common";
import {Cars} from "./cars.entity";
import {CarsService} from "./cars.service";
import {CarsController} from "./cars.controller";
import {DatasourceModule} from "../datasource/datasource.module";

@Module({
        controllers: [CarsController],
        providers: [CarsService],
        imports: [DatasourceModule],
    })
export class CarsModule{}