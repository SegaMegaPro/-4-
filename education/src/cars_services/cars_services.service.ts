import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Cars_services} from "./cars_services.entity";
import {Cars} from "../cars/cars.entity";

@Injectable()
export class Cars_servicesService
{
    constructor(private readonly datasourceService: DatasourceService)
    {
    }
    create(car_service: Cars_services)
    {
        this.datasourceService.getServices().push(car_service);
        return car_service;
    }
    findOne(id:number)
    {
        return this.datasourceService
            .getServices()
            .find((car_service) => car_service.id === id);
    }
    findAll() : Cars_services[]
    {
        return this.datasourceService.getServices();
    }
    update(id: number, updatedCar_service: Cars_services)
    {
        const index = this.datasourceService
            .getServices()
            .findIndex((car_service) => car_service.id === id);
        this.datasourceService.getServices()[index] = updatedCar_service;
        return this.datasourceService.getServices()[index];
    }
    remove(id: number)
    {
        const index = this.datasourceService
            .getServices()
            .findIndex((car_service) => car_service.id === id);
        this.datasourceService.getServices().splice(index, 1);
        return HttpStatus.OK;
    }
}