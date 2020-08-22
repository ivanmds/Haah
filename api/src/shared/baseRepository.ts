import DocumentStore from "ravendb";
import { environment } from "src/configs/environment";
import { BaseEntity } from "./baseEntity";

export abstract class BaseRepository<TEntity extends BaseEntity> {
    protected readonly store: DocumentStore;
    protected readonly collectionName: string;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.store = new DocumentStore(environment.ravendb.connectionString, environment.ravendb.databaseName);
        this.store.conventions.findCollectionNameForObjectLiteral = TEntity => this.collectionName;
        this.store.initialize();   
    }

    async findAll(): Promise<TEntity[]> {
        const session = this.store.openSession();
        return await session.query({ collection: this.collectionName }).all() as TEntity[];
    }

    async save(entity: TEntity) {
        const session = this.store.openSession();
        await session.store(entity);
        await session.saveChanges();
    }
}