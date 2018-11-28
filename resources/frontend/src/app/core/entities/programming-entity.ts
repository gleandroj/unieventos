import {BaseEntity} from './base-entity';

export interface ProgrammingEntity extends BaseEntity {
    description?: string;
    date?: string;
    edition?: string;
    is_today?: boolean;
    is_past?: boolean;
}
