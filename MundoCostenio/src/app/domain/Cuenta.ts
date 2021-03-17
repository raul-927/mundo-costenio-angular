import {TipoCuentaEnum} from '../numerator/TipoCuentaEnum';
import { GrupoCuenta } from './GrupoCuenta';
export class Cuenta{
    cuentaId:      number;
    cuentaDesc:    string;
    tipoCuenta:    TipoCuentaEnum;
    cuentaFecha:   Date;
    cuentaHora:    Date;
    cuentaUsuario: string;
    grupoCuenta:    GrupoCuenta;
}