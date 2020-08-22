import { BaseEntity } from "src/shared/baseEntity";

export class Group extends BaseEntity {
    key: string;
    name: string;
    description: string;
    created: number;
}