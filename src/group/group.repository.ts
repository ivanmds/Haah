import { BaseRepository } from "src/shared/BaseRepository";
import { Group } from "./group.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GroupRepository extends BaseRepository<Group>  {
    constructor() {
        super(groupCollectionName)
    }

    async findAll(): Promise<Group[]> {
        const session = this.store.openSession();
        return await session.query({ collection: groupCollectionName }).all() as Group[];
    }

    async save(group: Group) {
        const session = this.store.openSession();
        await session.store(group, group.key);
        await session.saveChanges();
    }
}

export const groupCollectionName = "Groups";