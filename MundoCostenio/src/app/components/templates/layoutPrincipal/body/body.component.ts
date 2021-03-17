import { Component, ViewChild, Type, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import {DynamicHostDirective} from '../../../../directivas/dynamic-host.directive';
import {FormGrupoCuentaComponent} from '../../../grupo-cuentas/form-grupo-cuenta/form-grupo-cuenta.component';
import {FormCuentaComponent} from '../../../cuentas/form-cuenta/form-cuenta.component';
import {ComponentFactory} from '../../../../domain/component-factory';
import {ListaComponentes} from '../../../../constant/ListaComponentes';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit , AfterViewInit{
  @ViewChild (DynamicHostDirective) 
  public dinamycHost: DynamicHostDirective;

  public listaComponentes: ComponentFactory[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
   }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    ListaComponentes.LISTA_COMPONENTES.forEach( resultado =>{
      this.createComponent(resultado.selector);
    });
  }

  public createComponent(parametro: any):void{
    ListaComponentes.LISTA_COMPONENTES.forEach( valor =>{
      if(parametro === valor.selector){
        const component = this.componentFactoryResolver.resolveComponentFactory(valor.component);
      //this.dinamycHost.viewContainerRef.clear();
      this.dinamycHost.viewContainerRef.createComponent(component);
      }
    })
  }
}
