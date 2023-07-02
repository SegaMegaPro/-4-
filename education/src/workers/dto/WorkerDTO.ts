import {IsNotEmpty, IsString} from "class-validator";
import {UsePipes, ValidationPipe} from "@nestjs/common";
@UsePipes(new ValidationPipe({ transform: true }))
export class CreateWorkerDto
{
  @IsNotEmpty()
  @IsString()
    fullname: string;
  @IsNotEmpty()
  @IsString()
    position: string;
  @IsNotEmpty()
  @IsString()
    phone: string;
}
