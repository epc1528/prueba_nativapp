import { Module } from '@nestjs/common';
import { PatientModule } from './api/patient/patient.module';
import { PgDatabaseModule } from './frameworks/databases/pg/pg-data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),PatientModule,
    PgDatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
