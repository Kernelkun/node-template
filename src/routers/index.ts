import express, {Router} from 'express'
import getAuthRoutes from './auth'

function getRouter(): Router {
    const router = express.Router()
    router.use('/auth', getAuthRoutes())
    return router
}

export default getRouter
