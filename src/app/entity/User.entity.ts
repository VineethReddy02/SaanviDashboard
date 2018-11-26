import { Worklogs } from '../entity/Work.entity';
export interface User {
    id: number;
    activity_name: string;
    is_productive: boolean;
    list: Worklogs[];
}