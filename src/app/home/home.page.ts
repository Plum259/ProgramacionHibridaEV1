import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonSelect,IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonSelect,IonSelectOption,CirculoComponent,TrianguloComponent, CommonModule],
})
export class HomePage {
  FiguraGeometrica:string = ""
  constructor() {}

  esTriangulo() {return this.FiguraGeometrica == "Triangulo"}
  esCirculo() {return this.FiguraGeometrica == "Circulo"}

  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) 
{
  this.FiguraGeometrica = $event.detail.value
}  
}
