import { Module } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { TransaccionController } from './transaccion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EsquemaTransaccion, Transaccion } from './entities/transaccion.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: Transaccion.name,
      schema: EsquemaTransaccion
    }])
    ],
  controllers: [TransaccionController],
  providers: [TransaccionService]
})
export class TransaccionModule {}
