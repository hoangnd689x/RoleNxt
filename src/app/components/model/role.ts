import { Domain } from './domain';
import { Competency } from './Competency';
import { Organization } from './organization';

export class Role {
    id: number;
    positionObj: Position;
    //careerPath: CareerPath;
    domainRole: string;
    category: string;
    competencies: string;
    scope: string;
    responsibilities: string;
    industrialRole: string;
    entryCriteria: string;
    kra: string;
    activate: boolean;
}