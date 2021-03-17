import{Component} from '@angular/core';
export class ComponentFactory{
    public selector: String;
    public component: any;

    constructor(selector: String, component:any){
        this.selector = selector;
        this.component = component;
    }


}