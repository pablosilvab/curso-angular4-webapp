import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Producto } from './../models/producto';

@Injectable()
export class ProductoService{
    public url:string;

    constructor(
        public _http: Http
    ){
        this.url = GLOBAL.url;
    }

    getProductos(){
        return this._http.get(this.url+'productos').map(res => res.json());
    }

    addProducto(producto: Producto){
        let json = JSON.stringify(producto);
        let params = 'json='+json;
        let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'});    
        
        return this._http.post(this.url+'productos', params, {headers: headers})
                         .map(res => res.json());
    }
}