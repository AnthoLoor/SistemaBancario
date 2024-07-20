import { EntitySchema } from 'typeorm'

export const Agencia = new EntitySchema({
  name: 'mg_agencias',
  tableName: 'mg_agencias',
  columns: {
    id_agencia: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    codigo_pais: {
      type: 'varchar',
      length: 25,
      nullable: false
    },
    codigo_provincia: {
      type: 'varchar',
      length: 25,
      nullable: false
    },
    codigo_ciudad: {
      type: 'varchar',
      length: 25,
      nullable: false
    },
    codigo_parroquia: {
      type: 'varchar',
      length: 10,
      nullable: true
    },
    nombre_agencia: {
      type: 'varchar',
      length: 12,
      nullable: false
    },
    direccion: {
      type: 'varchar',
      length: 50,
      nullable: false
    },
    referencia: {
      type: 'varchar',
      length: 50,
      nullable: false
    },
    estado: {
      type: 'boolean',
      default: true
    }
  },
  relations: {
    mg_cuenta_ahorros: {
      type: 'one-to-many',
      target: 'ca_cuentas_ahorros',
      inverseSide: 'id_agencia'
    }
  }
})
