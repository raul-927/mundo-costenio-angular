import { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';
import {FormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TipoCuentaEnum} from '../../../numerator/TipoCuentaEnum';
import {Cuenta} from '../../../domain/Cuenta';
import {CuentasService} from '../../../services/cuentas.service';

import {GrupoCuenta} from '../../../domain/GrupoCuenta';
import {GrupoCuentaService} from '../../../services/grupo-cuenta.service';

@Component({
  selector: 'app-form-cuenta',
  templateUrl: './form-cuenta.component.html',
  styleUrls: ['./form-cuenta.component.css']
})
export class FormCuentaComponent implements OnInit , OnChanges{

  optionEnumTipoCuenta:string[];
  cuenta: Cuenta;
  grupoCuentas: GrupoCuenta[];
  //grupoCuenta2:  GrupoCuenta;
  cambio: boolean;

  groupFormCuenta: FormGroup;
  tipoCuenta:      FormControl;
  grupoCuentaId:     FormControl;
  cuentaDesc:      FormControl;
  cuentaFecha:     FormControl;
  cuentaHora:      FormControl;
  cuentaUsuario:   FormControl;

  constructor(private formBuilder: FormBuilder, private grupoCuentaService: GrupoCuentaService, private cuentaService:CuentasService) {
    this.groupFormCuenta = formBuilder.group({
      tipoCuenta:    new FormControl('--Seleccionar--'),
      grupoCuentaId:   new FormControl('--Seleccionar--'),
      cuentaDesc:    new FormControl(),
      cuentaFecha:   new FormControl(),
      cuentaHora:    new FormControl(),
      cuentaUsuario: new FormControl()

    });
   }

  ngOnInit(): void {
    this.inicioSelectTipoCuenta();
   
  }
  ngOnChanges():void{
    
  }

  public inicioSelectTipoCuenta(): void{ //Enumerador
    this.optionEnumTipoCuenta = Object.keys(TipoCuentaEnum);
  }

  public inicioSelectGrupoCuenta(tipoCuentaEnum: any): void{ //Servicio
    this.grupoCuentas = [];
    this.groupFormCuenta.controls.grupoCuentaId.setValue('--Seleccionar--');
    let grupoCuenta = new GrupoCuenta();
    if(tipoCuentaEnum !=='--Seleccionar--'){
      grupoCuenta.tipoGrupoCuenta = tipoCuentaEnum;
      this.grupoCuentaService.select(grupoCuenta).subscribe(data =>{
        this.grupoCuentas = data;
      });
    }
  }

  public insertCuentas(param: any): void{
    let cuenta: Cuenta = new Cuenta();
    let grupoCuenta: GrupoCuenta = new GrupoCuenta();
    grupoCuenta.grupoCuentaId = param.grupoCuentaId;

    cuenta.grupoCuenta   = grupoCuenta;
    cuenta.cuentaDesc    = param.cuentaDesc;
    cuenta.tipoCuenta    = param.tipoCuenta;
    cuenta.cuentaFecha   = param.cuentaFecha;
    cuenta.cuentaHora    = param.cuentaHora;
    cuenta.cuentaUsuario = param.cuentaUsuario; 
  
    this.cuentaService.insert(cuenta).subscribe(result =>{
      this.cuenta = result;
      this.cambio = true;
    });
  }
}
