import { EntitySchema } from 'typeorm'

export const Firmantes = new EntitySchema({
  name: 'ca_firmantes',
  tableName: 'ca_firmantes',
  columns: {
    codigo_firmantes: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    codigo_cliente: {
      type: 'integer',
      nullable: false
    },
    codigo_usuario: {
      type: 'integer',
      nullable: false
    },
    numero_cuenta: {
      type: 'integer',
      nullable: false
    },
    tipo_firmante: {
      type: 'varchar',
      nullable: false,
      length: 10
    },
    es_principal: {
      type: 'boolean',
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
    mg_usuarios: {
      type: 'many-to-one',
      target: 'mg_usuarios',
      joinColumn: {
        name: 'codigo_usuario',
        referencedColumnName: 'codigo_usuario'
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
    }
  }
})
