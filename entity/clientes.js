import { EntitySchema } from 'typeorm'

export const Clientes = new EntitySchema({
  name: 'mg_clientes',
  tableName: 'mg_clientes',
  columns: {
    codigo_cliente: {
      type: 'integer',
      primary: true,
      nullable: false,
      generated: true
    },
    nombres: {
      type: 'varchar',
      length: 25,
      nullable: false
    },
    apellidos: {
      type: 'varchar',
      length: 25,
      nullable: false
    },
    sexo: {
      type: 'varchar',
      length: 1,
      nullable: false
    },
    fecha_nacimiento: {
      type: 'date',
      nullable: false
    },
    codigo_ciudad: {
      type: 'varchar',
      length: 10,
      nullable: true
    },
    ocupacion: {
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
    telefono: {
      type: 'varchar',
      length: 12,
      nullable: true
    },
    celular: {
      type: 'varchar',
      length: 12,
      nullable: true,
      unique: true
    },
    correo: {
      type: 'varchar',
      length: 30,
      nullable: false,
      unique: true
    },
    estado: {
      type: 'boolean',
      default: true
    },
    created: {
      createDate: true
    },
    updated: {
      updateDate: true
    },
    codigo_usuario: {
      type: 'integer',
      nullable: false
    },
    id_identificacion: {
      type: 'integer',
      nullable: false
    }
  },
  relations: {
    ca_tipo_identificacion: {
      type: 'many-to-one',
      target: 'ca_tipos_identificaciones',
      joinColumn: {
        name: 'id_identificacion',
        referencedColumnName: 'id_identificacion'
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
      type: 'one-to-many',
      target: 'ca_cuentas_ahorros',
      inverseSide: 'codigo_cliente'
    },
    ca_firmantes: {
      type: 'one-to-many',
      target: 'ca_firmantes',
      inverseSide: 'codigo_cliente'
    }
  }
})
