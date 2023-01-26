create database patient;

create table patient (
id varchar(20) unique not null,
patientid SERIAL primary key,
firstname varchar(255) not null,
lastname varchar(255) not null,
email varchar(255) not null,
phone varchar(20) not null
)