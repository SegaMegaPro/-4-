import {Injectable} from "@nestjs/common";
import {Cars} from "../cars/cars.entity";
import {Cars_services} from "../cars_services/cars_services.entity";
import {Workers} from "../workers/workers.entity";

@Injectable()
export class DatasourceService
{
    private cars: Cars[] = [];
    getCars(): Cars[]
    {
        return this.cars
    }

    private cars_services: Cars_services[] = [];
    getServices(): Cars_services[]
    {
        return this.cars_services
    }
    private workers: Workers[] = [];
    getWorkers(): Workers[]
    {
        return this.workers;
    }
}