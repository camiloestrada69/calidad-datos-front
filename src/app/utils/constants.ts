import {HttpHeaders} from '@angular/common/http';

//TODO: variables de router
export const LINK_REGISTRO_CONEXION = '/configuraciones/conexiones/registro-conexion';
export const LINK_CONFIGURACIONES = '/configuraciones';
export const LINK_CONEXIONES = '/configuraciones/conexiones';
export const LINK_EDITAR_CONEXION = '/configuraciones/conexiones/actualizacion-conexion/';
export const ID = 'id';


//TODO: variables de parametros
export const LIMIT = 'limit';
export const PAGE = 'page';
export const NOMBRE = 'nombre';
export const AMBIENTE = 'fuente';

//TODO: varibales de http
export const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//TODO: variables globales de datos
export const COLUMNS_ADMINISTRACION_DATOS = [
  { field: 'identificacion', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.ID', width: '200px'},
  { field: 'nacionalidad', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.NATIONALITY', width: '200px'},
  { field: 'ciudad', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.CITY', width: '200px'},
  { field: 'fechaNacimiento', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.DATE_OF_BIRTH', width: '200px'},
  { field: 'genero', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.GENDER', width: '200px'},
  { field: 'nombre', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.NAME', width: '200px'},
  { field: 'numeroViajeroFrecuente', header: 'No.Viajero Frecuente', width: '200px'},
  { field: 'correo', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.EMAIL', width: '200px'},
  { field: 'porcentajeCalidad', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.PERCENTAGE_QUALITY', width: '200px'},
  { field: 'reglasIncumplidas', header: 'MENU.BUSINESS_ENTITIES.ENTITIES.DATA_MANAGEMENT.BROKEN_RULES', width: '200px'}
];
export const IMAGE_CONFIGURACIONES = 'assets/images/ConfiguracionMenu.png';
export const IMAGE_NEGOCIO = 'assets/images/entidadesNegocio.png';
export const IMAGE_BIENVENIDA = 'assets/images/Bienvenida.png';

export const BUTTON_CREATE_CONNECTION = {
  link: LINK_REGISTRO_CONEXION,
  texto: 'BUTTONS.CREATE_CONNECTIONS',
  icono: ''
};

export const BREAD_CRUMB_ITEMS_CONEXIONES = [
  {
    label: 'MENU.CONFIGURATIONS.CONNECTIONS.TITLE',
    active: false
  },
  {
    label: 'MENU.CONFIGURATIONS.CONNECTIONS.CONNECTIONS_CREATED',
    active: false
  }
];

export const BREAD_CRUMB_ITEMS_CREAR_CONEXION = [
  {
    label: 'MENU.CONFIGURATIONS.CONNECTIONS.TITLE',
    active: false
  },
  {
    label: 'MENU.CONFIGURATIONS.CONNECTIONS.NEW_CONNECTION',
    active: false
  }
];

export const SEMANA = [
  {id: 1, dia: 'GENERAL.MONDAY'},
  {id: 2, dia: 'GENERAL.TUESDAY'},
  {id: 3, dia: 'GENERAL.WEDNESDAY'},
  {id: 4, dia: 'GENERAL.THURSDAY'},
  {id: 5, dia: 'GENERAL.FRIDAY'},
  {id: 6, dia: 'GENERAL.SATURDAY'},
  {id: 7, dia: 'GENERAL.SUNDAY'}
];

export const TIEMPOS = [
  {id: 1, nombre: 'Diario'},
  {id: 1, nombre: 'Semanal'},
  {id: 1, nombre: 'Quicenal'},
  {id: 1, nombre: 'Mensual'},
  {id: 1, nombre: 'Anual'}
];

export const sizes = [
  5, 10, 25, 50, 100
];

export const BREAD_CRUMB_ITEMS_FORM_ATRIBUTOS = [
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.ATTRIBUTES.TITLE',
    active: false
  },
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.ATTRIBUTES.CREATE_NEW_ATTRIBUT',
    active: true
  }
];

export const BREAD_CRUMB_ITEMS_FORM_CALIDAD = [
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.QUALITY.TITLE',
    active: false
  },
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.QUALITY.CREATE_NEW_RULE',
    active: true
  }
];
export const BREAD_CRUMB_ITEMS_FORM_USOS = [
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.USES.TITLE',
    active: false
  },
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.USES.CREATE_USE',
    active: true
  }
];
export const BREAD_CRUMB_ITEMS_FORM_FUENTES = [
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.SOURCE.TITLE',
    active: false
  },
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.SOURCE.CREATE_NEW_SOURCE',
    active: true
  }
];
export const BREAD_CRUMB_ITEMS_FORM_JOBS = [
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.JOBS.TITLE',
    active: false
  },
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.JOBS.CREATE_NEW_JOB',
    active: true
  }
];
export const BREAD_CRUMB_ITEMS_FORM_MATCH = [
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.MACTH.TITLE',
    active: false
  },
  {
    label: 'MENU.BUSINESS_ENTITIES.ENTITIES.MACTH.CREATE_NEW_MACTH',
    active: true
  }
];

export const TIME_DIALOG = 2000;





