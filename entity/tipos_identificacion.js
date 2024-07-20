import { EntitySchema } from 'typeorm'

export const TipoId = new EntitySchema({
  name: 'ca_tipos_identificaciones',
  columns: {
    id_identificacion: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    descripcion: {
      type: 'varchar',
      nullable: false,
      length: 20
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
      inverseSide: 'ca_tipos_identificaciones'
    }
  }
})
