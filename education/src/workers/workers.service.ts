import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Workers} from "./workers.entity";

@Injectable()
export class WorkersService
{
    constructor(private readonly datasourceService: DatasourceService)
    {
    }
    create(worker: Workers)
    {
        this.datasourceService.getWorkers().push(worker);
        return worker
    }
    findOne(id: number)
    {
        return this.datasourceService
            .getWorkers()
            .find((worker) => worker.id === id);
    }
    findAll(): Workers[]
    {
        return this.datasourceService.getWorkers();
    }
    update(id: number, updatedWorker: Workers)
    {
        const index = this.datasourceService
            .getWorkers()
            .findIndex((worker) => worker.id === id);
        this.datasourceService.getWorkers()[index] = updatedWorker;
        return this.datasourceService.getWorkers()[index];
    }
    remove(id: number)
    {
        const index = this.datasourceService
            .getWorkers()
            .findIndex((worker) => worker.id === id);
        this.datasourceService.getWorkers().splice(index,1);
        return HttpStatus.OK;
    }
}