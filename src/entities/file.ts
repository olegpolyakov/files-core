import {
    Entity,
    EntityData
} from '@olegpolyakov/core';

export type FileData = {
    name: string;
    path: string;
    hash: string;
    type: string;
    size: number;
} & EntityData;

export default class File extends Entity implements FileData {
    readonly name: string;
    readonly path: string;
    readonly hash: string;
    readonly type: string;
    readonly size: number;

    constructor({
        name = '',
        path = '',
        hash = '',
        type = '',
        size = 0,
        ...rest
    }: Partial<FileData>) {
        super(rest);

        this.name = name;
        this.path = path;
        this.hash = hash;
        this.type = type;
        this.size = size;
    }

    toData(): FileData {
        return {
            ...super.toData(),
            name: this.name,
            path: this.path,
            hash: this.hash,
            type: this.type,
            size: this.size
        };
    }
}