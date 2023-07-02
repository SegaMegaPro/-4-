import {IsNotEmpty, IsString, IsNumber} from "class-validator";
import {UsePipes, ValidationPipe} from "@nestjs/common";
@UsePipes(new ValidationPipe({ transform: true }))
export class CreateCarServiceDto
{
    @IsNotEmpty()
    @IsString()
    servicename: string;
    @IsNumber()
    @IsNotEmpty()
    price: number;
}
