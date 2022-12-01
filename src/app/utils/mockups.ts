import {TreeNode} from 'primeng/api';
export const fecha = Date.now();

export const fuentes = [
  {
    id: 1,
    nombre: 'Fuente 1'
  },
  {
    id: 2,
    nombre: 'fuente 2'
  }
];

export const ambientes = [
  {
    id: 1,
    nombre: 'Pruebas'
  },
  {
    id: 2,
    nombre: 'Producción'
  }
];

export const conexiones = [
  {
    id: 1,
    nombre: 'conexion 1',
    fuente: fuentes[0],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  },
  {
    id: 2,
    nombre: 'conexion 2',
    fuente: fuentes[1],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  },
  {
    id: 3,
    nombre: 'conexion 3',
    fuente: fuentes[1],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  },
  {
    id: 4,
    nombre: 'conexion 1',
    fuente: fuentes[0],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  },
  {
    id: 4,
    nombre: 'conexion 1',
    fuente: fuentes[0],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  },
  {
    id: 4,
    nombre: 'conexion 1',
    fuente: fuentes[0],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  },
  {
    id: 4,
    nombre: 'conexion 1',
    fuente: fuentes[0],
    url: 'url',
    ambiente: ambientes[0],
    usuario: 'usuario 1',
    password: '12345'
  }
];

export const treeTable: TreeNode[] = [
  {
    data: {
      identificacion: '1152442308',
      nacionalidad: 'Colombiana',
      ciudad: 'Medellín',
      fechaNacimiento: fecha,
      genero: 'M',
      nombre: 'Juan Camilo',
      numeroViajeroFrecuente: 2,
      correo: 'camilo@gmail.com',
      porcentajeCalidad: 50,
      reglasIncumplidas: 3
    },
    children: [
      {
        data: {
          identificacion: '1152442308',
          nacionalidad: 'Colombiana',
          ciudad: 'Medellín',
          fechaNacimiento: fecha,
          genero: 'M',
          nombre: 'Juan Camilo',
          numeroViajeroFrecuente: 2,
          correo: 'camilo@gmail.com',
          porcentajeCalidad: 50,
          reglasIncumplidas: 3
        },
      },
      {
        data: {
          identificacion: '1152442308',
          nacionalidad: 'Colombiana',
          ciudad: 'Medellín',
          fechaNacimiento: fecha,
          genero: 'M',
          nombre: 'Juan Camilo',
          numeroViajeroFrecuente: 2,
          correo: 'camilo@gmail.com',
          porcentajeCalidad: 50,
          reglasIncumplidas: 3
        },
      }
    ]
  },
  {
    data: {
      identificacion: '1152442308',
      nacionalidad: 'Colombiana',
      ciudad: 'Medellín',
      fechaNacimiento: fecha,
      genero: 'M',
      nombre: 'Juan Camilo',
      numeroViajeroFrecuente: 2,
      correo: 'camilo@gmail.com',
      porcentajeCalidad: 50,
      reglasIncumplidas: 3
    },
    children: [
      {
        data: {
          identificacion: '1152442308',
          nacionalidad: 'Colombiana',
          ciudad: 'Medellín',
          fechaNacimiento: fecha,
          genero: 'M',
          nombre: 'Juan Camilo',
          numeroViajeroFrecuente: 2,
          correo: 'camilo@gmail.com',
          porcentajeCalidad: 50,
          reglasIncumplidas: 3
        },
      },
      {
        data: {
          identificacion: '1152442308',
          nacionalidad: 'Colombiana',
          ciudad: 'Medellín',
          fechaNacimiento: fecha,
          genero: 'M',
          nombre: 'Juan Camilo',
          numeroViajeroFrecuente: 2,
          correo: 'camilo@gmail.com',
          porcentajeCalidad: 50,
          reglasIncumplidas: 3
        },
      }
    ]
  },
  {
    data: {
      identificacion: '1152442308',
      nacionalidad: 'Colombiana',
      ciudad: 'Medellín',
      fechaNacimiento: fecha,
      genero: 'M',
      nombre: 'Juan Camilo',
      numeroViajeroFrecuente: 2,
      correo: 'camilo@gmail.com',
      porcentajeCalidad: 50,
      reglasIncumplidas: 3
    },
    children: [
      {
        data: {
          identificacion: '1152442308',
          nacionalidad: 'Colombiana',
          ciudad: 'Medellín',
          fechaNacimiento: fecha,
          genero: 'M',
          nombre: 'Juan Camilo',
          numeroViajeroFrecuente: 2,
          correo: 'camilo@gmail.com',
          porcentajeCalidad: 50,
          reglasIncumplidas: 3
        },
      },
      {
        data: {
          identificacion: '1152442308',
          nacionalidad: 'Colombiana',
          ciudad: 'Medellín',
          fechaNacimiento: fecha,
          genero: 'M',
          nombre: 'Juan Camilo',
          numeroViajeroFrecuente: 2,
          correo: 'camilo@gmail.com',
          porcentajeCalidad: 50,
          reglasIncumplidas: 3
        },
      }
    ]
  }
];

export const atributos = [
  {
    codigo: 'Cust_ID',
    nombre: 'Identificación',
    porcentajeCalidad: 92,
    concepto: 'Concepto',
    etiquetas: [
      {id: '1', nombre: 'Customers', clase: 'botonAzul'},
      {id: '2', nombre: 'Marketing', clase: 'botonNaranja'}
    ],
    usos: [
      {id: '1', nombre: 'Facturación cliente', clase: 'botonMorado'}
    ],
  },
  {
    codigo: 'Cust_ID',
    nombre: 'Identificación',
    porcentajeCalidad: 92,
    concepto: 'Concepto',
    etiquetas: [
      {id: '1', nombre: 'Customers', clase: 'botonAzul'},
      {id: '2', nombre: 'Marketing', clase: 'botonNaranja'}
    ],
    usos: [
      {id: '1', nombre: 'Facturación cliente', clase: 'botonMorado'}
    ],
  },
  {
    codigo: 'Cust_ID',
    nombre: 'Identificación',
    porcentajeCalidad: 92,
    concepto: 'Concepto',
    etiquetas: [
      {id: '1', nombre: 'Customers', clase: 'botonAzul'},
      {id: '2', nombre: 'Marketing', clase: 'botonNaranja'}
    ],
    usos: [
      {id: '1', nombre: 'Facturación cliente', clase: 'botonMorado'}
    ],
  },
  {
    codigo: 'Cust_ID',
    nombre: 'Identificación',
    porcentajeCalidad: 92,
    concepto: 'Concepto',
    etiquetas: [
      {id: '1', nombre: 'Customers', clase: 'botonAzul'},
      {id: '2', nombre: 'Marketing', clase: 'botonNaranja'}
    ],
    usos: [
      {id: '1', nombre: 'Facturación cliente', clase: 'botonMorado'}
    ],
  },
  {
    codigo: 'Cust_ID',
    nombre: 'Identificación',
    porcentajeCalidad: 92,
    concepto: 'Concepto',
    etiquetas: [
      {id: '1', nombre: 'Customers', clase: 'botonAzul'},
      {id: '2', nombre: 'Marketing', clase: 'botonNaranja'}
    ],
    usos: [
      {id: '1', nombre: 'Facturación cliente', clase: 'botonMorado'}
    ],
  }
];

export const calidadDatos = [
  {
    codigo: 'Cust_ID_Un',
    nombre: 'Id unico',
    tipo: 'Unicidad',
    porcentajeEfectivo: 100,
    accion: 'Marcar'
  },
  {
    codigo: 'Cust_ID_Un',
    nombre: 'Id unico',
    tipo: 'Unicidad',
    porcentajeEfectivo: 100,
    accion: 'Marcar'
  },
  {
    codigo: 'Cust_ID_Un',
    nombre: 'Id unico',
    tipo: 'Unicidad',
    porcentajeEfectivo: 100,
    accion: 'Marcar'
  },
  {
    codigo: 'Cust_ID_Un',
    nombre: 'Id unico',
    tipo: 'Unicidad',
    porcentajeEfectivo: 100,
    accion: 'Marcar'
  }
];

export const usos = [
  {
    codigo: 'Cost_facil',
    nombre: 'Facturación cliente',
    porcentajeCalidad: 100,
    steward: 'Daniel Perez',
    concepto: 'Facturación',
    atributos: 'atributos'
  },
  {
    codigo: 'Cost_facil',
    nombre: 'Facturación cliente',
    porcentajeCalidad: 100,
    steward: 'Daniel Perez',
    concepto: 'Facturación',
    atributos: 'atributos'
  },
  {
    codigo: 'Cost_facil',
    nombre: 'Facturación cliente',
    porcentajeCalidad: 100,
    steward: 'Daniel Perez',
    concepto: 'Facturación',
    atributos: 'atributos'
  },
  {
    codigo: 'Cost_facil',
    nombre: 'Facturación cliente',
    porcentajeCalidad: 100,
    steward: 'Daniel Perez',
    concepto: 'Facturación',
    atributos: 'atributos'
  },
  {
    codigo: 'Cost_facil',
    nombre: 'Facturación cliente',
    porcentajeCalidad: 100,
    steward: 'Daniel Perez',
    concepto: 'Facturación',
    atributos: 'atributos'
  },
  {
    codigo: 'Cost_facil',
    nombre: 'Facturación cliente',
    porcentajeCalidad: 100,
    steward: 'Daniel Perez',
    concepto: 'Facturación',
    atributos: 'atributos'
  },
];

export const fuentesDatos = [
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  },
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  },
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  },
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  },
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  },
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  },
  {
    codigo: '1',
    nombre: 'Fuente A',
    conexion: 'CEM',
    tabla: 'Customer',
    atributos: 49,
    filas: '32.4M',
    porcentajeCalidad: 90,
    filasIssues: '4.8M',
    ultimaCarga: fecha,
    ultimoPerfilamiento: fecha
  }
];

export const jobs = [
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  },
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  },
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  },
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  },
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  },
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  },
  {
    codigo: '1',
    nombre: 'Perfilamiento diario',
    cronogramaEjecucion: 'Diario 8:00 AM',
    ultimaEjecucion: fecha,
    ultimoError: fecha,
    medioEjecucion: 'API'
  }
];

export const macthes = [
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  },
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  },
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  },
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  },
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  },
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  },
  {
    clase:'fuenteUsuario',
    codigo: '1',
    atributo: 'Identificación',
    fuente1: ['ID', 'Funete A'],
    fuente2: ['ID_User', 'Funete C'],
    fuentePreferida: 'Usuario'
  }
];

export const navItems = [
  {
    clase: 'navClientes__adminDatos',
    id: 1,
    label: 'Administración datos',
    url: '/entidades/esquemas/clientes/administracion-datos'
  },
  {
    clase: 'navClientes__atributos',
    id: 2,
    label: 'Atributos',
    url: '/entidades/esquemas/clientes/atributos'
  },
  {
    clase:'navClientes__calidad',
    id: 2,
    label: 'Calidad',
    url: '/entidades/esquemas/clientes/calidad-datos'
  },
  {
    clase: 'navClientes__usos',
    id: 3,
    label: 'Usos',
    url: '/entidades/esquemas/clientes/usos'
  },
  {
    clase: 'navClientes__fuentes',
    id: 4,
    label: 'Fuentes',
    url: '/entidades/esquemas/clientes/fuentes'
  },
  {
    clase: 'navClientes__match',
    id: 5,
    label: 'Macth',
    url: '/entidades/esquemas/clientes/macth'
  },
  {
    clase: 'navClientes__jobs',
    id: 6,
    label: 'Jobs',
    url: '/entidades/esquemas/clientes/jobs'
  }
];
export const etiquetas = ['Customer', 'Marketing'];

export const reglas = [
  {
    codigo: 'Macth_ID',
    nombre: 'Macth exact',
    tipo: 'Aproximado'
  },
  {
    codigo: 'Macth_ID',
    nombre: 'Macth item',
    tipo: 'Exacto'
  }
];
export const tipificaciones = [
  {
    codigo: 1,
    nombre: 'Unicidad'
  },
  {
    codigo: 2,
    nombre: 'Tipo de dato'
  },
  {
    codigo: 3,
    nombre: 'Range check'
  },
  {
    codigo: 4,
    nombre: 'Data length check'
  },
  {
    codigo: 5,
    nombre: 'Black value check'
  }
];



