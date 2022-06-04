import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { Video } from './video'
import videoSchema from './videoSchema'

@InputType()
class VideoInput {
    @Field()
    description: String
    @Field()
    title: String
    @Field()
    category: String
}

@Resolver()
class VideoResolver {

    @Mutation(() => Video)
    addVideo(@Arg("VideoInput") videoInput: VideoInput) {
        return videoSchema.create(videoInput)
    }


    @Query(() => [Video])
    async videos() {
        return videoSchema.find()
    }
}

export { VideoResolver }