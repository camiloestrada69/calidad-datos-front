import {Component} from '@angular/core';
import {IMAGE_BIENVENIDA, LINK_CONFIGURACIONES} from '../../utils/constants';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})

export class BienvenidaComponent {
  url = LINK_CONFIGURACIONES;
  imageBienvenida = IMAGE_BIENVENIDA;

}
