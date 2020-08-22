import { Controller, Get, Post, Body, Put, Param } from "@nestjs/common";
import { Group } from "./group.entity";
import { GroupRepository } from "./group.repository";

@Controller("groups")
export class GroupController {

    constructor(private readonly repository : GroupRepository) {}

    @Get()
    async list(): Promise<Group[]> {
        return await this.repository.findAll();
    }
    
    @Post()
    async save(@Body() group: Group) {
        await this.repository.save(group);
    }
}