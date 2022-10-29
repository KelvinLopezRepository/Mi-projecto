import { Module } from '@nestjs/common';
import { CajaService } from './caja.service';
import { CajaController } from './caja.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Caja, EsquemaCaja } from './entities/caja.entity';

@Module({
  imports:[
  MongooseModule.forFeature([{
    name: Caja.name,
    schema: EsquemaCaja
  }])
  ],
  controllers: [CajaController],
  providers: [CajaService],
})
export class CajaModule {}
