import express from 'express'

const getAuthRoutes = () => {
    const router = express.Router()

    router.get('/me', (req, res) => {
        res.send('Works')
    })

    return router
}

export default getAuthRoutes
