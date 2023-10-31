import logger from "pino";
import dayjs from "dayjs";
import config from 'config'

const level = config.get<string>("logLevel")

const log = logger({
    transport: {

        target: "pino-pretty",
    },
    level,
    options: {
        levelFirst: true,
        translateTime: true,
        colorize: true,
    },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;