import { EntitySchema } from 'typeorm'

export const TipoCuenta = new EntitySchema({
  name: 'ca_tipos_cuentas',
  tableName: 'ca_tipos_cuentas',
  columns: {
    id_tipo_cuenta: {
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
    ca_cuentas_ahorros: {
      type: 'one-to-many',
      target: 'ca_cuentas_ahorros',
      inverseSide: 'id_tipo_cuenta'
    }
  }
})
