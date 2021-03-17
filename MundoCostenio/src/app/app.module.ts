import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TablaGrupoCuentaComponent } from './components/grupo-cuentas/tabla-grupo-cuenta/tabla-grupo-cuenta.component';
import { TablaCuentaComponent } from './components/cuentas/tabla-cuenta/tabla-cuenta.component';
import { FormCuentaComponent } from './components/cuentas/form-cuenta/form-cuenta.component';
import { FormGrupoCuentaComponent } from './components/grupo-cuentas/form-grupo-cuenta/form-grupo-cuenta.component';
import { FormImpuestosComponent } from './components/impuestos/form-impuestos/form-impuestos.component';
import { TablaImpuestosComponent } from './components/impuestos/tabla-impuestos/tabla-impuestos.component';
import { TablaProductosComponent } from './components/productos/tabla-productos/tabla-productos.component';
import { FormProductosComponent } from './components/productos/form-productos/form-productos.component';
import { MenuPrincipalComponent } from './components/templates/layoutPrincipal/menu-principal/menu-principal.component';
import { FooterComponent } from './components/templates/layoutPrincipal/footer/footer.component';
import { HeaderComponent } from './components/templates/layoutPrincipal/header/header.component';
import { ColLeftComponent } from './components/templates/layoutPrincipal/col-left/col-left.component';
import { BodyComponent } from './components/templates/layoutPrincipal/body/body.component';
import { CarrouselComponent } from './components/templates/layoutPrincipal/carrousel/carrousel.component';
import { FormTipoProductoComponent } from './components/tipo-producto/form-tipo-producto/form-tipo-producto.component';
import { TablaTipoProductoComponent } from './components/tipo-producto/tabla-tipo-producto/tabla-tipo-producto.component';
import { DynamicHostDirective } from './directivas/dynamic-host.directive';



const ENTRYCOMPONENTS = [
  FormGrupoCuentaComponent,
  FormCuentaComponent
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablaGrupoCuentaComponent,
    TablaCuentaComponent,
    FormCuentaComponent,
    FormGrupoCuentaComponent,
    FormImpuestosComponent,
    TablaImpuestosComponent,
    TablaProductosComponent,
    FormProductosComponent,
    MenuPrincipalComponent,
    FooterComponent,
    HeaderComponent,
    ColLeftComponent,
    BodyComponent,
    CarrouselComponent,
    FormTipoProductoComponent,
    TablaTipoProductoComponent,
    DynamicHostDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ENTRYCOMPONENTS
  ]
})
export class AppModule { }
