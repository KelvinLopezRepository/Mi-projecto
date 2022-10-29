import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";


@Schema()
export class Caja {


    id: ObjectId

    @ApiProperty({required: true, type: String})
    @Prop()
    Descripcion: string

}


export const  EsquemaCaja = SchemaFactory.createForClass( Caja )
