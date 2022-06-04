import { ApolloServer } from 'apollo-server'

async function bootstrap() {
    const server = new ApolloServer({})
    server.listen({ port: 4000 }, console.log(`Server is running`))

}

bootstrap()