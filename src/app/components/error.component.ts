import { Component } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../views/error.html'
})

export class ErrorComponent{
    public titulo: string;

    constructor(){
        this.titulo = 'Error! Página no encontrada';
    }

    ngOnInit(){
        console.log('Se ha cargado el componente Error.Component.ts');
    }
}
