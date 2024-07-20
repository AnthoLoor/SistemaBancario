import { DataSource } from 'typeorm'
import { DATABASE } from './config.js'
import { Clientes } from './entity/clientes.js'
import { TipoId } from './entity/tipos_identificacion.js'
import { Usuario } from './entity/usuarios.js'
import { TipoCuenta } from './entity/tipos_cuentas.js'
import { Agencia } from './entity/agencias.js'
import { Cuentas } from './entity/cuentas_ahorros.js'
import { Movimientos } from './entity/movimientos.js'
import { TipoTransaccion } from './entity/tipos_transacciones.js'
import { Firmantes } from './entity/firmantes.js'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgresql',
  database: DATABASE,
  entities: [
    Clientes,
    TipoId,
    Usuario,
    TipoCuenta,
    Agencia,
    Cuentas,
    Movimientos,
    TipoTransaccion,
    Firmantes
  ],
  logging: true,
  synchronize: true
})
