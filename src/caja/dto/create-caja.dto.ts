import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCajaDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @ApiProperty({required: true, type: String})
    Descripcion: string
}
