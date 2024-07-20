import { EntitySchema } from 'typeorm'

export const Usuario = new EntitySchema({
  name: 'mg_usuarios',
  columns: {
    codigo_usuario: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    password: {
      type: 'varchar',
      nullable: false
    },
    fecha_inicio: {
      type: 'timestamp with time zone',
      nullable: false
    },
    fecha_fin: {
      type: 'timestamp with time zone',
      nullable: false
    },
    estado: {
      type: 'boolean',
      default: true
    }
  },
  relations: {
    mg_clientes: {
      type: 'one-to-many',
      target: 'mg_clientes',
      inverseSide: 'codigo_usuario'
    },
    ca_firmantes: {
      type: 'one-to-many',
      target: 'ca_firmantes',
      inverseSide: 'codigo_usuario'
    }
  }
})
