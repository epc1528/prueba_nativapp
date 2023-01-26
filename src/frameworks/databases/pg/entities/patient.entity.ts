import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  patientid?: number;

  @Column("varchar", { length: 20, unique: true })
  id: string;

  @Column("varchar", { length: 255 })
  firstname:string;

  @Column("varchar", { length: 255 })
  lastname:string;

  @Column("varchar", { length: 255, unique: true })
  email:string;

  @Column("varchar", { length: 20 })
  phone:string
}