import {BaseEntity} from './base-entity';

export interface UserEntity extends BaseEntity {
    registration: string;
    name: string;
    email: string;
    type: string;
    gender: string;
    role: string;
    birthday: string;
    cellphone: string;
    password?: string;
    password_confirmation?: string;
    avatar?: string;

    type_description?: string;
    gender_description?: string;
    role_description?: string;
}
