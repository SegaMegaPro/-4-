import {CarsService} from "./cars.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Cars} from "./cars.entity";
import {CreateCarDto} from "./dto/CarDTO";

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService)
    {
    }
    @Get()
    findAll()
    {
        return this.carsService.findAll();
    }
    @Get(":id")
    findOne(@Param("id") id: string)
    {
        return this.carsService.findOne(+id);
    }
    @Put(":id")
    update(@Param("id") id: string,@Body() updateCar: Cars)
    {
        return this.carsService.update(+id, updateCar);
    }
    @Post()
    create(@Body() createCar: CreateCarDto)
    {
        return this.carsService.create(createCar);
    }
    @Delete(":id")
    remove(@Param("id") id: string)
    {
        return this.carsService.remove(+id);
    }
    @Get('incomplete')
    findIncomplete()
    {
        this.carsService.findIncomplete();
    }
}


