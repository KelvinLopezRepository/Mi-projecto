import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";



@Schema()
export class Concepto {


    id: ObjectId

    @ApiProperty({required: true, type: String})
    @Prop()
    Concepto: string

    @ApiProperty({required: true, type: String})
    @Prop()
    Detalle: string

}


export const EsquemaConcepto =  SchemaFactory.createForClass( Concepto )