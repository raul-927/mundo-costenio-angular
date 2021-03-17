import {Rol} from './Rol';

export class User{
    userId:number;
    nic: string;
    password:string;
    enabled:boolean;
    roles: Array<Rol>;
    
    username: string;
    firstName: string;
    lastName: string;
    authdata?: string;
}