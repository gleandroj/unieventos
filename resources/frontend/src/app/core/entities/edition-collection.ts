import {ProgrammingEntity} from './programming-entity';

export interface EditionCollection {
    edition: string;
    programmings: ProgrammingEntity[];
}