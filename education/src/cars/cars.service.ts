import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Cars} from "./cars.entity";

@Injectable()
export class CarsService
{
    constructor(private readonly datasourceService: DatasourceService)
    {

    }
    create(car: Cars)
    {
        this.datasourceService.getCars().push(car);
        return car;
    }
    findOne(id:number)
    {
        return this.datasourceService
            .getCars()
            .find((car) => car.id === id);
    }
    findAll() : Cars[]
    {
        return this.datasourceService.getCars();
    }
    update(id: number, updatedCar: Cars)
    {
        const index = this.datasourceService
            .getCars()
            .findIndex((car) => car.id === id);
        this.datasourceService.getCars()[index] = updatedCar;
        return this.datasourceService.getCars()[index];
    }
    remove(id: number)
    {
        const index = this.datasourceService
            .getCars()
            .findIndex((car) => car.id === id);
        this.datasourceService.getCars().splice(index, 1);
        return HttpStatus.OK;
    }
}
