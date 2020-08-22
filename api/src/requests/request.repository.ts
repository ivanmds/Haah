import { BaseRepository } from "src/shared/baseRepository";
import { Request } from "./request.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RequestRepository extends BaseRepository<Request> {
    constructor() {
        super(requestCollectionName)
    }
}

export const requestCollectionName = "Requests";