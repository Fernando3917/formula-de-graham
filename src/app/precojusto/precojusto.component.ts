import { Component } from '@angular/core';

@Component({
  selector: 'app-precojusto',
  templateUrl: './precojusto.component.html',
  styleUrls: ['./precojusto.component.css']
})
export class PrecojustoComponent {
  lpa : number = 0;
  vpa : number = 0;
  //fix : number =22.5;
  resultado: number = 0;

  constructor(){

  }
  calcularprecojusto (): number{
    let lpa = this.lpa;
    let vpa = this.vpa;
    //let fix = this.fix;

    this.resultado = Math.sqrt(22.5 * lpa * vpa);
    alert(this.resultado);

    return this.resultado
    
  }
}
