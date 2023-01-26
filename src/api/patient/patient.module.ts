import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PgDatabaseModule } from 'src/frameworks/databases/pg/pg-data.module';
import { ExceptionsModule } from 'src/config/exception/exception.module';
//import { GuardsModule } from 'src/lib/guard/guard.module';

@Module({
  controllers: [PatientController],
  providers: [PatientService],
  imports:[PgDatabaseModule, ExceptionsModule]
})
export class PatientModule {}
