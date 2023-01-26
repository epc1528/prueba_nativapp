import { IPatientRepository } from "../core/abstracts/patient-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgPatientRepository<T> 
    extends PgGenericRepository<T>
    implements IPatientRepository<T>
{
    
};