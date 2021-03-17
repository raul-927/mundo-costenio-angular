import { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TipoGrupoCuentaEnum} from '../../../numerator/TipoGrupoCuentaEnum';
import {GrupoCuenta} from '../../../domain/GrupoCuenta';
import {GrupoCuentaService} from '../../../services/grupo-cuenta.service';

@Component({
  selector: 'app-form-grupo-cuenta',
  templateUrl: './form-grupo-cuenta.component.html',
  styleUrls: ['./form-grupo-cuenta.component.css']
})
//FORM 001
export class FormGrupoCuentaComponent implements OnInit {
  optionsEnumTipoCuenta: string[];
  //tiposCuentas: TipoGrupoCuentaEnum;
  
  cambio: boolean;
  
  groupFormGrupoCuenta: FormGroup;
  grupoCuentaId:        FormControl;
  tipoGrupoCuenta:      FormControl;
  grupoCuentaDesc:      FormControl;

  grupCuenta: GrupoCuenta;
  grupoCuentas: GrupoCuenta[];

  constructor(private formBuilder: FormBuilder, private grupoCuentaService:GrupoCuentaService) {
    this.groupFormGrupoCuenta = formBuilder.group({
      grupoCuentaId:   new FormControl(),
      tipoGrupoCuenta: new FormControl('--Seleccionar--'),
      grupoCuentaDesc: new FormControl()
    });
   }

  ngOnInit(): void {
    this.inicioSelectTipoGrupoCuenta();
    this.grupoCuentaService.listAll().subscribe(data => {
      this.grupoCuentas = data;
    });
  }

  public inicioSelectTipoGrupoCuenta(): void{
    this.optionsEnumTipoCuenta = Object.keys(TipoGrupoCuentaEnum);
  }

  public insertGrupoCuentas(param: NgForm): void {
    this.cambio = false;
    
    this.grupoCuentaService.insert(param).subscribe(result => {
      this.grupCuenta = result;
      this.cambio = true;
      this.groupFormGrupoCuenta.controls.tipoGrupoCuenta.setValue('--Seleccionar--');
      this.groupFormGrupoCuenta.controls.grupoCuentaDesc.setValue(null);
    }, 
    error => console.error('El error es: ' + error));

  }

}
