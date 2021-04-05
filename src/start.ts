import cors from 'cors'
import express from "express";
import getRouter from "./routers";
import {Server} from "http";

export function startServer({port = process.env.PORT} = {}): Promise<Server> {
    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use('/api', getRouter())

    return new Promise(resolve => {
        const server = app.listen(port, ()=>{
            console.log(`Server is running in port ${port}`)
            const originalClose = server.close.bind(server)
            server.close = (): any => {
                return new Promise(resolveClose => {
                    originalClose(resolveClose)
                })
            }
            resolve(server)
        })
    })
}
