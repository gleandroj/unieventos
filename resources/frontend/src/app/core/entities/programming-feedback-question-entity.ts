import {BaseEntity} from './base-entity';

export interface ProgrammingFeedbackQuestionEntity extends BaseEntity {
    question?: string;
    created_by?: string;
    type: number;
    type_description?: string;
    created_by_name?: string;
    answer?: string;
}
