import {IMAGE_CONFIGURACIONES, IMAGE_NEGOCIO, LINK_CONEXIONES} from 'src/app/utils/constants';
import {MenuItem} from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENU.CONFIGURATIONS.TITLE',
    image: IMAGE_CONFIGURACIONES,
    subItems: [
      {
        id: 1.1,
        label: 'MENU.CONFIGURATIONS.CONNECTIONS.TITLE',
        link: LINK_CONEXIONES,
        parentId: 1
      },
      {
        id: 1.2,
        label: 'MENU.CONFIGURATIONS.TABLES',
        link: LINK_CONEXIONES,
        parentId: 1
      },
      {
        id: 1.3,
        label: 'MENU.CONFIGURATIONS.USERS',
        link: LINK_CONEXIONES,
        parentId: 1
      },
      {
        id: 1.4,
        label: 'MENU.CONFIGURATIONS.JOBS',
        link: LINK_CONEXIONES,
        parentId: 1
      }
    ]
  },
  {
    id: 2,
    label: 'MENU.BUSINESS_ENTITIES.TITLE',
    clase: 'menu__entidades',
    image: IMAGE_NEGOCIO,
    subItems: [
      {
        id: 2.1,
        label: 'MENU.BUSINESS_ENTITIES.SCHEME_1',
        icon: 'bx bxs-grid',
        parentId: 2,
        subItems: [
          {
            id: 2.2,
            label: 'Clientes',
            link: '/entidades/esquemas/clientes/administracion-datos',
            parentId: 2.1
          },
          {
            id: 2.3,
            label: 'Asesores',
            link: '/entidades/esquemas/clientes/administracion-datos',
            parentId: 2.1
          }
        ]
      },
      {
        id: 3,
        label: 'MENU.BUSINESS_ENTITIES.SCHEME_2',
        icon: 'bx bxs-grid',
        parentId: 3.1,
        subItems: [
          {
            id: 3.2,
            label: 'Enitdad 3',
            link: '/entidades/esquemas/clientes/administracion-datos',
            parentId: 3.1
          },
          {
            id: 3.3,
            label: 'Enitdad 4',
            link: '/entidades/esquemas/clientes/administracion-datos',
            parentId: 3.1
          }
        ]
      },
    ]
  },
];

