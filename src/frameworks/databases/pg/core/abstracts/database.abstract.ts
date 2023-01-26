import { Patient } from "../../entities";
import { IPatientRepository } from "./patient-repository.abstract";

export abstract class IDatabaseAbstract {
    public abstract readonly patients: IPatientRepository<Patient>;
};