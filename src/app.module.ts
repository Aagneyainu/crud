import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './src/item/item.module';
import { BranchmasterModule } from './branchmaster/branchmaster.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'ndbs.nura-in.com',
      port: 59599,
      username: 'HMSNuraBlr1_Dummy',
      password: 'HMSNura8000Blr1_Dum',
      database: 'HMSNuraBlr1_Dummy',
      // synchronize: true,
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    }),
    ItemModule,
    BranchmasterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
