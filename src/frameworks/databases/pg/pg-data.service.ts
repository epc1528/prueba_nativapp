import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDatabaseAbstract } from "./core/abstracts/database.abstract";
import { IPatientRepository } from "./core/abstracts/patient-repository.abstract";
import { Patient } from "./entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PgPatientRepository } from "./repositories/pg-patient.repository";

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public patients: IPatientRepository<Patient>;

  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>
  ) {};

  public onApplicationBootstrap() {
    this.patients = new PgPatientRepository<Patient>(this.patientRepository);
  };
};