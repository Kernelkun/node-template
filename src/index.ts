import { app, port } from './app'

app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})
