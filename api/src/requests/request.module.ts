import { NestModule } from "@nestjs/common/interfaces/modules";
import { RequestRepository } from "./request.repository";
import { Module } from "@nestjs/common/decorators/modules";
import { RequestController } from "./request.controller";
import { MiddlewareConsumer } from "@nestjs/common";

@Module({
    controllers: [RequestController],
    providers: [RequestRepository]
})
export class RequestModule implements NestModule {
    configure(consumer: MiddlewareConsumer) { }
}