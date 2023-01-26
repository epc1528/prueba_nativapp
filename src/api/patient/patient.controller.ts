import { Controller, Post, Body, UseGuards} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientCreateOutput } from './output/patient-create-output';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    const patients = await this.patientService.create(createPatientDto);
    return plainToClass(PatientCreateOutput, {message: "Patient saved", code: 200})
  }
}
