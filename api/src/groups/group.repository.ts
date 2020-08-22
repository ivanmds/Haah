import { BaseRepository } from "src/shared/baseRepository";
import { Group } from "./group.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GroupRepository extends BaseRepository<Group>  {
    constructor() {
        super(groupCollectionName)
    }
}

export const groupCollectionName = "Groups";