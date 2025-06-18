import Fastify from 'fastify'
import { registerRoutes } from './router/endpoints'
import { registerLifespanHooks } from './utils/lifespan'
import { loggerOptions } from '../common/logger'

const app = Fastify({ logger: loggerOptions, ignoreTrailingSlash: true })

registerLifespanHooks(app)
registerRoutes(app)

const start = async () => {
  try {
    await app.listen({ port: 3000 })
    app.log.info('Server running on http://localhost:3000')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
