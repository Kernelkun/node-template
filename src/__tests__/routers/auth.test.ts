import axios, {AxiosInstance} from 'axios'
import {startServer} from '../../start'
import {Server} from 'http'
import {AddressInfo} from 'net'
import {getData, handleRequestFailure} from '../../utils/async'

let server: Server
let api: AxiosInstance

beforeAll(async () => {
  server = await startServer()
  const {port} = server.address() as AddressInfo
  const baseURL = `http://localhost:${port}/api/auth`
  api = axios.create({baseURL})
  api.interceptors.response.use(getData, handleRequestFailure)
})

afterAll(async () => {
  await server.close()
})

// beforeEach(async () => {
//   await resetDb()
// })

describe('Auth Flow', () => {
  describe('/me', () => {
    test('Should return user info', async () => {
      const result = await api.get('/me')
      expect(result).toMatchInlineSnapshot(`"Works"`)
    })
  })
})
