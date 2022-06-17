import {ComponentFactory} from '../domain/component-factory';
import {FormGrupoCuentaComponent} from '../components/grupo-cuentas/form-grupo-cuenta/form-grupo-cuenta.component';
// import {FormCuentaComponent} from '../components/cuentas/form-cuenta/form-cuenta.component';
// import {FormTipoProductoComponent} from '../components/tipo-producto/form-tipo-producto/form-tipo-producto.component';
// import {FormProductosComponent} from '../components/productos/form-productos/form-productos.component';
export class ListaComponentes{
    public static LISTA_COMPONENTES = [
        new ComponentFactory('app-form-grupo-cuenta', FormGrupoCuentaComponent)
        /*new ComponentFactory('app-form-cuenta', FormCuentaComponent),
        new ComponentFactory('app-form-app-form-tipo-producto', FormTipoProductoComponent),
        new ComponentFactory('app-form-productos', FormProductosComponent)*/
    ];

}
