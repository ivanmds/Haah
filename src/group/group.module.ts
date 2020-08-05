import { NestModule, Module, MiddlewareConsumer } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupRepository } from "./group.repository";

@Module({
    controllers: [GroupController],
    providers: [GroupRepository]
})
export class GroupModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}