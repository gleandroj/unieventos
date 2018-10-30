import {BaseEntity} from './base-entity';
import {ProgrammingFeedbackQuestionEntity} from './programming-feedback-question-entity';

export interface ProgrammingFeedbackEntity extends BaseEntity {
    title?: string;
    created_by?: string;
    created_by_user?: any;
    questions_count?: number;
    questions?: ProgrammingFeedbackQuestionEntity[];
}
