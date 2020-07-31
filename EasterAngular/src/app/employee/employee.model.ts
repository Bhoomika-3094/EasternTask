import { Address } from "../employee/adress.model";
export class Employee{
    constructor(public id:number,public name:string, public phone:number,public address : Address){}
}