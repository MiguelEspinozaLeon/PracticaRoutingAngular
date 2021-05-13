import { Component} from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  
})
export class CuerpoComponent {
  mostrar = true;
  informacion = {
    autor: 'Benito Juarez',
    frase: 'El respeto al derecho ajeno es la paz'
  }


  personajes = ['Batman', 'Bart', 'Teemo']

  index = 1;

  

}
