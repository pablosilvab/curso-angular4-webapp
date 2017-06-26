import { Producto } from './../models/producto';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from './../services/producto.services';

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Crear un nuevo producto';
        this.producto = new Producto(0,'','',0,'');
    }

    ngOnInit() {
        console.log('Producto-add.component.ts cargado!');
    }

    onSubmit(){
        console.log(this.producto);
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if (response.code == 200){
                    this._router.navigate(['/home']);
                } else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any> error);
            }
        );
    }

}