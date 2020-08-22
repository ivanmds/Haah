import { Controller, Get, Body, Post } from "@nestjs/common";
import { RequestRepository } from "./request.repository";
import { Request } from "./request.entity";

@Controller("requests")
export class RequestController {
    constructor(readonly requestRepository: RequestRepository) { }

    @Get()
    async list(): Promise<Request[]> {
        return this.requestRepository.findAll();
    }

    @Post()
    async save(@Body() request) {
        this.requestRepository.save(request);
    }
}