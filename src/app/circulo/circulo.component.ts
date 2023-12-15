import { Component, OnInit } from '@angular/core';
import {IonList,IonItem,IonInput,IonButton,IonImg,IonCard} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [IonList,IonItem,IonInput,IonButton,FormsModule,IonImg,IonCard],
})
export class CirculoComponent  implements OnInit {
  Radio: string = "";
  resultado: string = "";
  constructor() { }

  ngOnInit() {}
  calcularPerimetro()
  {
    const Radio = parseInt(this.Radio)
    const FiguraGeometrica = new CirculoComponent
    this.resultado = `El perimetro es ${Radio*(2*3.1416)}`
  }
}
