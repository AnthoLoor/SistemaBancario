import { EntitySchema } from 'typeorm'

export const Cuentas = new EntitySchema({
  name: 'ca_cuentas_ahorros',
  tableName: 'ca_cuentas_ahorros',
  columns: {
    numero_cuenta: {
      type: 'bigint',
      primary: true,
      nullable: false,
      generated: 'rowid',
      min: 1000000000
    },
    nombre_cuenta: {
      type: 'varchar',
      nullable: false,
      length: 50
    },
    fecha_apertura: {
      type: 'date',
      nullable: false
    },
    deposito_inicial: {
      type: 'integer',
      nullable: false
    },
    saldo: {
      type: 'integer',
      nullable: false
    },
    saldo_total: {
      type: 'integer',
      nullable: false
    },
    fecha_ultimo_movimiento: {
      type: 'varchar',
      nullable: false,
      length: 15
    },
    estado_proceso: {
      type: 'integer',
      nullable: false
    },
    estado_cuenta: {
      type: 'integer',
      nullable: false
    },
    codigo_cliente: {
      type: 'integer',
      nullable: false
    },
    id_agencia: {
      type: 'integer',
      nullable: false
    },
    id_tipo_cuenta: {
      type: 'integer',
      nullable: false
    }
  },
  relations: {
    mg_clientes: {
      type: 'many-to-one',
      target: 'mg_clientes',
      joinColumn: {
        name: 'codigo_cliente',
        referencedColumnName: 'codigo_cliente'
      },
      cascade: false
    },
    mg_agencias: {
      type: 'many-to-one',
      target: 'mg_agencias',
      joinColumn: {
        name: 'id_agencia',
        referencedColumnName: 'id_agencia'
      },
      cascade: false
    },
    ca_tipos_cuentas: {
      type: 'many-to-one',
      target: 'ca_tipos_cuentas',
      joinColumn: {
        name: 'id_tipo_cuenta',
        referencedColumnName: 'id_tipo_cuenta'
      },
      cascade: false
    }
  }
})
