import { KeyValue } from "./dtos/keyValue";
import { BaseEntity } from "src/shared/baseEntity";

export class Request extends BaseEntity {
    id: string;
    description: string;
    url: string;
    body: string;
    contentType: string;
    httpCode: HttpCode;
    httpType: HttpMethodType;
    headers: KeyValue[];
    params: KeyValue[];
}