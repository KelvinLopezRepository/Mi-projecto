import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { ConceptoController } from './concepto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Concepto, EsquemaConcepto } from './entities/concepto.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: Concepto.name,
      schema: EsquemaConcepto
    }])
    ],
  controllers: [ConceptoController],
  providers: [ConceptoService]
})
export class ConceptoModule {}
