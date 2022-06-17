// simport { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';
import {/*FormsModule,*/ FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TipoGrupoCuentaEnum} from '../../../numerator/TipoGrupoCuentaEnum';
import {GrupoCuenta} from '../../../domain/GrupoCuenta';
import {GrupoCuentaService} from '../../../services/grupo-cuenta.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-form-grupo-cuenta',
  templateUrl: './form-grupo-cuenta.component.html',
  styleUrls: ['./form-grupo-cuenta.component.css']
})
export class FormGrupoCuentaComponent implements OnInit, OnChanges {
  optionsEnumTipoCuenta: string[];

  cambio: boolean;

  groupFormGrupoCuenta: FormGroup;
  grupoCuentaId: FormControl;
  tipoGrupoCuenta: FormControl;
  grupoCuentaDesc: FormControl;

  grupCuenta: GrupoCuenta;
  grupoCuentas: GrupoCuenta[];
  private token: string;
  constructor(formBuilder: FormBuilder, private grupoCuentaService: GrupoCuentaService, private authenticationService: AuthService) {
    this.groupFormGrupoCuenta = formBuilder.group({
      grupoCuentaId:   new FormControl(),
      tipoGrupoCuenta: new FormControl('--Seleccionar--'),
      grupoCuentaDesc: new FormControl()
    });
   }

  ngOnInit(): void {
    this.inicioSelectTipoGrupoCuenta();
    this.authenticationService.login().subscribe(auth => {
        this.token = auth.token_type + ' ' + auth.access_token;
        console.log('TOKEN_EN_INIT: ' + this.token);
        this.grupoCuentaService.listAll(this.token).subscribe(data => {
        this.grupoCuentas = data;
      });
    });
  }
  ngOnChanges(): void {
    this.authenticationService.login().subscribe(auth => {
        this.token = auth.token_type + ' ' + auth.access_token;
        console.log('TOKEN_EN_INIT: ' + this.token);
        this.grupoCuentaService.listAll(this.token).subscribe(data => {
        this.grupoCuentas = data;
      });
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

  public login(): void {
      this.authenticationService.login().subscribe(auth => {
        this.token = auth.token_type + ' ' + auth.access_token;
        console.log('TOKEN_EN_LOGIN: ' + this.token);
        this.grupoCuentaService.listAll(this.token).subscribe(data => {
        this.grupoCuentas = data;
      });
    });
  }
}
