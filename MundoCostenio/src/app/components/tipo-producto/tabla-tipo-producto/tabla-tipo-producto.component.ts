import { Component, HostBinding, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Form } from '@angular/forms';
import { TipoProducto } from 'src/app/domain/TipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-tabla-tipo-producto',
  templateUrl: './tabla-tipo-producto.component.html',
  styleUrls: ['./tabla-tipo-producto.component.css']
})
export class TablaTipoProductoComponent implements OnInit, OnChanges {
  @HostBinding('attr.class')
  cssClass = 'row';

  tipoProducto:   TipoProducto;
  tiposProductos: TipoProducto[];


  formTableTipProd: FormGroup;
  tipProdId:        FormControl;
  descTipoProducto: FormControl;
  habilitoLapiz:    boolean;

  @Input()
  cambio: boolean;

  constructor(private tipoProductoService: TipoProductoService, fb: FormBuilder) {
    this.formTableTipProd = fb.group({
      tipProdId: new FormControl('', Validators.required),
      descTipoProducto: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
    this.habilitoLapiz = true;
    this.inicializoTabla();
    this.formTableTipProd = new FormGroup({
      tipProdId: new FormControl('', Validators.required),
      descTipoProducto: new FormControl('', Validators.required)
    });
  }

  ngOnChanges() {
    this.inicializoTabla();
  }

  public inicializoTabla():void{
    let tipoProducto  = new TipoProducto();
    this.tipoProductoService.select(tipoProducto).subscribe( data => {
      this.tiposProductos = data;
    });
    this.tipoProducto = null;
    this.formTableTipProd.controls['descTipoProducto'].setValue("");
  }

  public habilitoNombre(id: any):void {
    const numero: number = this.tiposProductos.length;
    const aux = 'descTipoProducto_' + id;
    this.tiposProductos.forEach( data => {
      if (id === data.tipProdId) {
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


  public habilitoBotonGrabar(id: any):void {
    const aux = 'floppy_' + id;
    if (document.getElementById(aux).id === aux) {
      document.getElementById(aux).removeAttribute('disabled');
      document.getElementById(aux).setAttribute('enabled', 'enabled');
      this.habilitoLapiz = false;
    }

  }

  public desHabilitoBotonGrabar(id: any):void {
    const aux = 'floppy_' + id;
    if (document.getElementById(aux).id === aux) {
      document.getElementById(aux).removeAttribute('enabled');
      document.getElementById(aux).setAttribute('disabled', 'disabled');
      this.habilitoLapiz = true;
    }
  }


  public actualizoNombre(id: any):void {
    this.tipoProducto = new TipoProducto();
    this.tipoProducto.tipProdId = id;
    this.tipoProducto.descTipoProducto = this.formTableTipProd.controls.descTipoProducto.value;
    this.tipoProductoService.update(this.tipoProducto).subscribe(result => {
      this.tipoProducto = result;
      this.tipoProducto.tipProdId = 0;
      this.tipoProducto.descTipoProducto = null;
      this.tipoProducto.cuenta = null;
      id = 0;
      this.habilitoLapiz = true;
      this.ngOnChanges();
    }, error => console.error('El error es: ' + JSON.stringify(error)));
  }


  public eliminoRegistro(id: any):void {
    this.tipoProductoService.delete(id).subscribe(result => {
      if (!this.habilitoLapiz) {
        this.habilitoLapiz = true;
      }
      this.ngOnChanges();
    }, error => console.error('El error es: ' + JSON.stringify(error)));
  }
}
