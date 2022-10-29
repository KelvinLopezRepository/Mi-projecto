import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CajaModule } from './caja/caja.module';
import { ConceptoModule } from './concepto/concepto.module';
import { TransaccionModule } from './transaccion/transaccion.module';



@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,"..","public"),
    
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    CajaModule,
    ConceptoModule,
    TransaccionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
