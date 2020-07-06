import { Organization } from './organization';

export class Position {
    id: number;
    position_name: string;
    position_summary: string;
    career_path_id: string;
    activate: boolean;
    organizationObj: Organization;
}