import {Fuentes} from '@app/core/enums/fuentes';
import {Ambientes} from '@app/core/enums/ambientes';

export class Conexion{
  id?: number;
  nombre?: string;
  url?: string;
  idUsuario?: number;
  usuario?: string;
  contrasena?: string;
  fuente?: Fuentes;
  ambiente?: Ambientes;
}
