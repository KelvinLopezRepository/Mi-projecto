import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCajaDto {

    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    Descripcion: string
}
