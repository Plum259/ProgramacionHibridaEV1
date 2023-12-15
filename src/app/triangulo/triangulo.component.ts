import { Component, OnInit } from '@angular/core';
import {IonList,IonItem,IonInput,IonButton,IonImg,IonCard} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonList,IonItem,IonInput,IonButton,FormsModule,IonImg,IonCard],
})
export class TrianguloComponent  implements OnInit {
  ladoA:string = "";
  ladoB:string = "";
  ladoC:string = "";
  resultado:string = "";
  constructor() 
  {
    
  }
  calcularPerimetro()
  {
    const ladoA = parseInt(this.ladoA)
    const ladoB = parseInt(this.ladoB)
    const ladoC = parseInt(this.ladoC)
    const FiguraGeometrica = new TrianguloComponent
    this.resultado = `El perimetro es: ${this.ladoA+this.ladoB+this.ladoC}`
  }
  ngOnInit() {}

}
