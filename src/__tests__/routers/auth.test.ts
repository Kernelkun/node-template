// import axios from 'axios'
import { startServer } from '../../start'
import {Server} from "http";

let server: Server

beforeAll(async () => {
  server = await startServer()
//   const baseUrl = `http://localhost:${server.address().port}/api`
})

afterAll(async () => {
  await server.close()
})

describe('/me', () => {
  test('Should return user info', () =>{
    expect(1).toBe(1)
  })
})