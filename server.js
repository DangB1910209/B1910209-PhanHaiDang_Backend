const app = require('./app')
const config = require('./app/config')
const MongoDB = require('./app/utils/mongodb.util')

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri)
        console.log(`Connected to database with uri: ${config.db.uri}`);
        const PORT = config.app.port;

        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}!`)
        })
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

startServer()