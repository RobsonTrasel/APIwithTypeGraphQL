import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { VideoResolver } from './video/videoResolver'

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [VideoResolver]
    })
    const server = new ApolloServer({ schema })

    server.listen({ port: 4000 }, console.log(`Server is running`))

}

bootstrap()