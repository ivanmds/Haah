import { Controller, Get, Render, Post, Body, Res } from "@nestjs/common";
import { Group } from "./group.entity";
import { Result } from "src/shared/result";
import { GroupRepository } from "./group.repository";

@Controller("groups")
export class GroupController {

    constructor(private readonly repository : GroupRepository) {}

    @Get('index')
    async index(): Promise<Result<Group>> {
        const groups = await this.repository.findAll();

        return {
            list: groups
        };
    }
    
    @Post('save')
    async save(@Body() group: Group) {
        group.created = Date.now();
        await this.repository.save(group);
    }

}