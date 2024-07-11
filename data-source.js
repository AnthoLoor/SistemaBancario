import { DataSource } from 'typeorm'
import { DATABASE } from './config.js'
import { Clientes } from './entity/clientes.js'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgresql',
  database: DATABASE,
  entities: [Clientes],
  logging: true,
  synchronize: true
})
