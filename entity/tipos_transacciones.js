import { EntitySchema } from 'typeorm'

export const TipoTransaccion = new EntitySchema({
  name: 'mg_tipos_transacciones',
  tableName: 'mg_tipos_transacciones',
  columns: {
    id_tipo_transaccion: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    tipo_transaccion: {
      type: 'varchar',
      nullable: false,
      length: 10
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
    ca_movimientos: {
      type: 'one-to-many',
      target: 'ca_movimientos',
      inverseSide: 'id_tipo_transaccion'
    }
  }
})
