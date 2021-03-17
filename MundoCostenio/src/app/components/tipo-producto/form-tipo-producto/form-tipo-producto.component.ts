import { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';
import {FormsModule, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TipoCuentaEnum} from '../../../numerator/TipoCuentaEnum';
import {Cuenta} from '../../../domain/Cuenta';
import {TipoProducto} from '../../../domain/TipoProducto'
import {CuentasService} from '../../../services/cuentas.service';
import {TipoProductoService} from '../../../services/tipo-producto.service';

@Component({
  selector: 'app-form-tipo-producto',
  templateUrl: './form-tipo-producto.component.html',
  styleUrls: ['./form-tipo-producto.component.css']
})
export class FormTipoProductoComponent implements OnInit {
  cambio: boolean;

  formGroupTipoProducto:       FormGroup;
  formControlCuentaId:         FormControl;
  formControlDescTipoProducto: FormControl;

  tipoProducto:  TipoProducto;
  tipoProductos: TipoProducto[];
  cuentas: Cuenta[];
  
  constructor(private fb: FormBuilder, 
              private cuentasService: CuentasService, 
              private tipoProductoService: TipoProductoService) { 
    this.formGroupTipoProducto = fb.group({
      formControlCuentaId:     new FormControl(),
      formControlDescTipoProducto: new FormControl()
    });
  }

  ngOnInit(): void {
    this.inicioSelectCuenta();
  }

  public inicioSelectCuenta(): void{
    let cuenta: Cuenta = new Cuenta();
    cuenta.tipoCuenta = TipoCuentaEnum.PRODUCTO;
    this.cuentasService.select(cuenta).subscribe(result =>{
      this.cuentas = result;
    });
  }

  public insertTipoProducto(param: any): void{
    this.cambio = false;
    let cuenta: Cuenta = new Cuenta();
    let tipoProducto: TipoProducto = new TipoProducto();
    cuenta.cuentaId     = param.formControlCuentaId;
    tipoProducto.cuenta = cuenta;
    tipoProducto.descTipoProducto = param.formControlDescTipoProducto;
    this.tipoProductoService.insert(tipoProducto).subscribe(result =>{
      this.tipoProducto = result;
      this.cambio = true;
      this.formGroupTipoProducto.controls.formControlCuentaId.setValue('--Seleccionar--');
      this.formGroupTipoProducto.controls.formControlDescTipoProducto.setValue(null);
    }
    , 
    error => console.error('El error es: ' + error));
  }

}
