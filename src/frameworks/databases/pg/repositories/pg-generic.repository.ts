import { Repository } from "typeorm";
import { IGenericRepository } from "../core/abstracts/generic-repository.abstract";

export class PgGenericRepository<T> implements IGenericRepository<T> {
    public _repository: Repository<T>;
  
    constructor(repository: Repository<T>) {
      this._repository = repository;
    };
  
    public async findAll(): Promise<T[]> {
      return this._repository.find();
    };
  
    public async findOne(id: Object): Promise<T> {
      return this._repository.findOne(id);
    };
  
    public async create(item: T | any): Promise<T> {
      return this._repository.save(item);
    };
};