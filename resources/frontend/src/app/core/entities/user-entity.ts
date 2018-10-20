import {BaseEntity} from './base-entity';

export interface UserEntity extends BaseEntity {
    registration: string;
    name: string;
    email: string;
    type: string;
    gender: string;
    role: string;
    avatar?: string;
}
