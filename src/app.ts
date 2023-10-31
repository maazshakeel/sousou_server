import express from 'express'
import config from 'config'
import logger from './utils/logger'
import router from './routes'

const port = config.get<number>("port")

const app = express()
app.use(router)

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`)
})