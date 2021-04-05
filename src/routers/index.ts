import express from 'express'
import getAuthRoutes from './auth'

function getRouter() {
    const router = express.Router()
    router.use('/auth', getAuthRoutes())
    return router
}

export default getRouter
