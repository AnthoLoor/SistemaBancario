import { EntitySchema } from 'typeorm'

export const Movimientos = new EntitySchema({
  name: 'ca_movimientos',
  tableName: 'ca_movimientos',
  columns: {
    id_deposito: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    fecha_transaccion: {
      type: 'date',
      nullable: false
    },
    hora: {
      type: 'time',
      nullable: false
    },
    codigo_usuario: {
      type: 'varchar',
      nullable: false,
      length: 10
    },
    monto_transaccion: {
      type: 'integer',
      nullable: false
    },
    saldo: {
      type: 'integer',
      nullable: false
    },
    estado: {
      type: 'boolean',
      default: true
    },
    numero_cuenta: {
      type: 'bigint',
      nullable: false
    },
    id_tipo_transaccion: {
      type: 'varchar',
      nullable: false
    }
  },
  relations: {
    mg_clientes: {
      type: 'many-to-one',
      target: 'mg_tipos_transacciones',
      joinColumn: {
        name: 'id_tipo_transaccion',
        referencedColumnName: 'id_tipo_transaccion'
      },
      cascade: false
    },
    ca_cuentas_ahorros: {
      type: 'many-to-one',
      target: 'ca_cuentas_ahorros',
      joinColumn: {
        name: 'numero_cuenta',
        referencedColumnName: 'numero_cuenta'
      },
      cascade: false
    },
    ca_firmantes: {
      type: 'one-to-many',
      target: 'ca_firmantes',
      inverseSide: 'numero_cuenta'
    }
  }
})
