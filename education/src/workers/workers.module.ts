import {Module} from "@nestjs/common";
import {Workers} from "./workers.entity";
import {WorkersController} from "./workers.controller";
import {WorkersService} from "./workers.service";
import {DatasourceModule} from "../datasource/datasource.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module(
    {
        controllers:[WorkersController],
        providers:[WorkersService],
        imports:[DatasourceModule,
        TypeOrmModule.forFeature([Workers])],
    }
)
export class WorkersModule{}