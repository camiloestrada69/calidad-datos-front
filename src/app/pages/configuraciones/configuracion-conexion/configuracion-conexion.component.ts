import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LINK_CONEXIONES} from '@utils/constants';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Fuentes} from '@app/core/enums/fuentes';
import {Ambientes} from '@app/core/enums/ambientes';
import {fuentes} from '@utils/mockups';
import {Conexion} from '@app/core/models/conexion';
import {ConexionFacade} from '@service/conexion/conexion.facade';

@Component({
  selector: 'app-configuracion-conexion',
  templateUrl: './configuracion-conexion.component.html',
  styleUrls: ['./configuracion-conexion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfiguracionConexionComponent implements OnInit {
  @Output() submit = new EventEmitter<any>();
  @Input() conexion = new Conexion();
  urlConexiones = LINK_CONEXIONES;
  form: FormGroup = new FormGroup<any>({});
  fuentes = [
    Fuentes.AZURE_DATA_LAKE
  ];
  ambientes = [
    Ambientes.PRUEBAS,
    Ambientes.PRODUCCION
  ];
  ambienteSelecionado = this.ambientes[1];
  fuenteSelecionada = this.fuentes[0];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombre: [this.conexion.nombre, [Validators.required, Validators.maxLength(50)]],
      fuente: [this.conexion.fuente],
      url: [this.conexion.url, [Validators.required]],
      ambiente: [this.conexion.ambiente],
      usuario: [this.conexion.usuario, [Validators.required, Validators.maxLength(50)]],
      password: [this.conexion.contrasena, [Validators.required]],
    });
    if (this.conexion.id && this.conexion.fuente && this.conexion.ambiente) {
      this.fuenteSelecionada = this.conexion.fuente;
      this.ambienteSelecionado = this.conexion.ambiente;
    }
  }

  probarConexion(): void {
    if (this.form.invalid) {
      return;
    }
    this.conexion = {
      id: this.conexion.id,
      nombre: this.form.controls.nombre.getRawValue(),
      url: this.form.controls.url.getRawValue(),
      idUsuario: 1,
      usuario: this.form.controls.usuario.getRawValue(),
      contrasena: this.form.controls.password.getRawValue(),
      fuente: this.fuenteSelecionada,
      ambiente: this.ambienteSelecionado
    };
    this.submit.emit(this.conexion);
  }

  seleccionarAmbiente(event: any): void {
    this.ambienteSelecionado = event;
  }

  seleccionarFuente(event: any): void {
    this.fuenteSelecionada = event;
  }

}
