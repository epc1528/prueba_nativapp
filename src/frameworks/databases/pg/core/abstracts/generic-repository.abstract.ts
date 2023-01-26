export abstract class IGenericRepository<T> {
    public abstract findAll(): Promise<T[]>;
    public abstract findOne(id:Object): Promise<T>;
    public abstract create(item:T|T[]): Promise<T|T[]>;
};