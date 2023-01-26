import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator'

export class CreatePatientDto {
    @Matches(/([0-9])/g,{message:"the field must only be numeric"})
    @MaxLength(20)
    @MinLength(1)
    @IsNotEmpty()
    id:string;

    @IsString()
    @MaxLength(255)
    @MinLength(1)
    @IsNotEmpty()
    firstname:string;

    @IsString()
    @MaxLength(255)
    @MinLength(1)
    @IsNotEmpty()
    lastname:string;

    @IsString()
    @MaxLength(20)
    @MinLength(1)
    @IsNotEmpty()
    phone:string;

    @IsString()
    @IsEmail()
    @MaxLength(255)
    @MinLength(1)
    @IsNotEmpty()
    email:string;

}
