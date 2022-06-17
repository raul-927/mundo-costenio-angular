import { Component, HostBinding, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, /*Form*/ } from '@angular/forms';
import { GrupoCuenta } from '../../../domain/GrupoCuenta';
import {GrupoCuentaService} from '../../../services/grupo-cuenta.service';
// import {AuthService} from '../../../services/auth.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tabla-grupo-cuenta',
  templateUrl: './tabla-grupo-cuenta.component.html',
  styleUrls: ['./tabla-grupo-cuenta.component.css']
})
export class TablaGrupoCuentaComponent implements OnInit, OnChanges {


  @HostBinding('attr.class')
  cssClass = 'row';

   grupoCuentas: GrupoCuenta[];
   grupoCuenta: GrupoCuenta;
   formTable: FormGroup;
   grupoCuentaDesc: FormControl;
   habilitoLapiz: boolean;
   private token: string;

   @Input()
   cambio: boolean;
   constructor(private grupoCuentaService: GrupoCuentaService, fb: FormBuilder, private authenticationService: AuthService) {
     this.formTable = fb.group({
      grupoCuentaDesc: new FormControl('', Validators.required)
     });
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.habilitoLapiz = true;
    this.inicializoTabla();
    this.formTable = new FormGroup({
      grupoCuentaDesc: new FormControl()
    });
  }

  // tslint:disable-next-line: typedef
  ngOnChanges() {
    this.inicializoTabla();
  }

  public inicializoTabla(): void{
    this.authenticationService.login().subscribe(auth => {
        this.token = auth.token_type + ' ' + auth.access_token;
        localStorage.setItem('token', this.token);
        sessionStorage.setItem('token', this.token);
        console.log('sessionStorage.getItem(token): ' + sessionStorage.getItem('token'));
        this.grupoCuentaService.listAll(sessionStorage.getItem('token')).subscribe(data => {
        this.grupoCuentas = data;
      });
    });
    this.grupoCuenta = null;
    this.formTable.controls.grupoCuentaDesc.setValue('');
  }

  public habilitoNombre(id: any): void {
    // const numero: number = this.grupoCuentas.length;
    const aux = 'grupoCuentaDesc_' + id;
    this.grupoCuentas.forEach( data => {
      if (id === data.grupoCuentaId) {
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

  public actualizoNombre(id: any, tipo: any): void {
    this.grupoCuenta = new GrupoCuenta();
    this.grupoCuenta.grupoCuentaId = id;
    this.grupoCuenta.tipoGrupoCuenta = tipo;
    this.grupoCuenta.grupoCuentaDesc = this.formTable.controls.grupoCuentaDesc.value;
    this.grupoCuentaService.update(this.grupoCuenta).subscribe(result => {
      this.grupoCuenta = result;
      this.grupoCuenta.grupoCuentaId = 0;
      this.grupoCuenta.grupoCuentaDesc = null;
      this.grupoCuenta.tipoGrupoCuenta = null;
      id = 0;
      tipo = null;
      this.habilitoLapiz = true;
      this.ngOnChanges();
    }, error => console.error('El error es: ' + JSON.stringify(error)));
  }

  public eliminoRegistro(id: any): void {
    this.grupoCuentaService.delete(id).subscribe(result => {
      console.log(result);
      if (!this.habilitoLapiz) {
        this.habilitoLapiz = true;
      }
      this.ngOnChanges();
    }, error => console.error('El error es: ' + JSON.stringify(error)));
  }
}
