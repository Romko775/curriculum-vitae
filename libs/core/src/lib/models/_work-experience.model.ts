import { IStackItem } from './_stack-item.model';
import { IProject } from './_project.model';
import { DateAlike } from './_date-alike.model';

export interface IWorkExperience {
  stack: IStackItem[],
  responsibilities: string[],
  project: IProject,
  description: string,
  company: string,
  dates?: [DateAlike, DateAlike],
  position: string
}

