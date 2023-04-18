import {WorkersService} from "./workers.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Workers} from "./workers.entity";

@Controller ("workers")
export class WorkersController
{
    constructor(private readonly workersService: WorkersService)
    {
    }
    @Get()
    findAll()
    {
        return this.workersService.findAll();
    }
    @Get(":id")
    findOne(@Param("id") id: string)
    {
        return this.workersService.findOne(+id);
    }
    @Put(":id")
    update(@Param("id") id: string, @Body() updateWorker: Workers)
    {
        return this.workersService.update(+id, updateWorker);
    }
    @Post()
    create(@Body() createWorker: Workers)
    {
        return this.workersService.create(createWorker);
    }
    @Delete(":id")
    remove(@Param("id") id: string)
    {
        return this.workersService.remove(+id);
    }
}