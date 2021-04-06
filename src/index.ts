import logger, {LogLevelDesc} from 'loglevel'
import {startServer} from './start'
import {AddressInfo} from 'net'

const isTest = process.env.NODE_ENV !== 'test'
const logLevel = process.env.LOG_LEVEL || (isTest ? 'warn' : 'info')

logger.setLevel(logLevel as LogLevelDesc)

startServer().then((server) => {
  const {port} = server.address() as AddressInfo
  console.log(`Server is running in port ${port}`)
})
