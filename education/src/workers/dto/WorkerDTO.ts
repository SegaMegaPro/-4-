import {IsNotEmpty, IsString} from "class-validator";

export class CreateWorkerDto
{
  @IsNotEmpty()
    id: number;
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
