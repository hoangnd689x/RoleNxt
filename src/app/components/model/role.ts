import { Domain } from './domain';
import { Competency } from './Competency';
import { Organization } from './organization';

export class Role {
    id: number;
    positionObj: Position;
    //careerPath: CareerPath;
    domainRole: string;
    category: string;
    competencies: Competency[];
    scope: string;
    responsibilities: string;
    industrialRole: string;
    entryCriteria: string;
    kra: string;
    activate: boolean;
}