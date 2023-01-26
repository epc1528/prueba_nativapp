import { Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/config/exception/exceptions.service';
import { IDatabaseAbstract } from 'src/frameworks/databases/pg/core/abstracts/database.abstract';
import { CreatePatientDto } from './dto/create-patient.dto';
import { ICreatePatient } from './interfaces/create-patient.interface';

@Injectable()
export class PatientService {

  constructor(
    private databaseService: IDatabaseAbstract,
    private exceptions: ExceptionsService,
  ){}

  async create(patient: CreatePatientDto) {
    return await this.databaseService.patients.create(patient)
  }
}
