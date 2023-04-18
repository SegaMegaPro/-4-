import {Module} from "@nestjs/common";
import {Workers} from "./workers.entity";
import {WorkersController} from "./workers.controller";
import {WorkersService} from "./workers.service";
import {DatasourceModule} from "../datasource/datasource.module";

@Module(
    {
        controllers:[WorkersController],
        providers:[WorkersService],
        imports:[DatasourceModule],
    }
)
export class WorkersModule{}