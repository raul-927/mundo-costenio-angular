import { Component, /*HostBinding,*/ Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, /*Form */} from '@angular/forms';
import { GrupoCuenta } from 'src/app/domain/GrupoCuenta';
import { GrupoCuentaService } from 'src/app/services/grupo-cuenta.service';
import { Cuenta } from '../../../domain/Cuenta';
import {CuentasService} from '../../../services/cuentas.service';
import {TipoCuentaEnum} from '../../../numerator/TipoCuentaEnum';
@Component({
  selector: 'app-tabla-cuenta',
  templateUrl: './tabla-cuenta.component.html',
  styleUrls: ['./tabla-cuenta.component.css']
})
export class TablaCuentaComponent implements OnInit, OnChanges {

  @Input()
  cambio: boolean;
  cuenta: Cuenta;
  cuentas: Cuenta[];
  grupoCuentas: GrupoCuenta[];
  optionEnumTipoCuenta: string[];

  habilitoLapiz: boolean;

  formCuentaTable: FormGroup;
  cuentaId: FormControl;
  cuentaDesc: FormControl;
  tipoCuenta: FormControl;
  grupoCuenta: FormControl;
  cuentaFecha: FormControl;
  cuentaHora: FormControl;
  cuentaUsuario: FormControl;

  grupoCuentaDesc: FormControl;

  constructor(private cuentasService: CuentasService, private grupoCuentaService: GrupoCuentaService, fb: FormBuilder) {
    this.formCuentaTable = fb.group({
      cuentaId: new FormControl('', Validators.required),
      cuentaDesc: new FormControl('', Validators.required),
      tipoCuenta: new FormControl('', Validators.required),
      grupoCuenta: new FormControl('', Validators.required),
      cuentaFecha: new FormControl('', Validators.required),
      cuentaHora: new FormControl('', Validators.required),
      cuentaUsuario: new FormControl('', Validators.required),

      grupoCuentaDesc: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.habilitoLapiz = true;
    this.inicializoTabla();
    this.formCuentaTable = new FormGroup({
      cuentaId: new FormControl('', Validators.required),
      cuentaDesc: new FormControl('', Validators.required),
      tipoCuenta: new FormControl('--Seleccionar--', Validators.required),
      grupoCuenta: new FormControl('', Validators.required),
      cuentaFecha: new FormControl('', Validators.required),
      cuentaHora: new FormControl('', Validators.required),
      cuentaUsuario: new FormControl('', Validators.required),

      grupoCuentaDesc: new FormControl('--Seleccionar--', Validators.required)
    });
  }

  // tslint:disable-next-line: typedef
  ngOnChanges() {
    this.inicioSelectTipoCuenta();
    this.inicializoTabla();

  }

  public inicioSelectTipoCuenta(): void{
    this.optionEnumTipoCuenta = Object.keys(TipoCuentaEnum);
  }

  public inicializoTabla(): void{
    const cuenta  = new Cuenta();
    const grupoCuenta = new GrupoCuenta();

    this.cuentasService.select(cuenta).subscribe( data => {
      this.cuentas = data;
    });
    this.cuenta = null;

    this.grupoCuentaService.select(grupoCuenta).subscribe(data => {
      this.grupoCuentas = data;
    });
    this.formCuentaTable.controls.cuentaDesc.setValue('');
  }

  public inicioSelectGrupoCuenta(tipoCuentaEnum: any): void{
    this.grupoCuentas = [];
    this.formCuentaTable.controls.grupoCuentaDesc.setValue('--Seleccionar--');
    const grupoCuenta = new GrupoCuenta();
    if (tipoCuentaEnum !== '--Seleccionar--'){
      grupoCuenta.tipoGrupoCuenta = tipoCuentaEnum;
      this.grupoCuentaService.select(grupoCuenta).subscribe(data => {
        this.grupoCuentas = data;
      });
    }
  }
  public habilitoNombre(id: any): void {
    // const numero: number = this.cuentas.length;
    const aux = 'cuentaDesc' + id;
    this.cuentas.forEach( data => {
      if (id === data.cuentaId) {
        if (document.getElementById(aux).id === aux) {
          document.getElementById(aux).removeAttribute('disabled');
          document.getElementById(aux).setAttribute('enabled', 'enabled');
          this.habilitoBotonGrabar(id);
          this.habilitoLapiz = false;
        } else {
          document.getElementById(aux).removeAttribute('enabled');
          document.getElementById(aux).setAttribute('disabled', 'disabled');
          this.desHabilitoBotonGrabar(id);
          this.habilitoLapiz = true;
        }
      }
    });
  }

  public habilitoBotonGrabar(id: any): void {
    const aux = 'floppy_' + id;
    if (document.getElementById(aux).id === aux) {
      document.getElementById(aux).removeAttribute('disabled');
      document.getElementById(aux).setAttribute('enabled', 'enabled');
      this.habilitoLapiz = false;
    }

  }

  public desHabilitoBotonGrabar(id: any): void {
    const aux = 'floppy_' + id;
    if (document.getElementById(aux).id === aux) {
      document.getElementById(aux).removeAttribute('enabled');
      document.getElementById(aux).setAttribute('disabled', 'disabled');
      this.habilitoLapiz = true;
    }
  }

}
