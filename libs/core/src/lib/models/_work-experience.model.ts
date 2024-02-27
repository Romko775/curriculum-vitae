import { IStackItem } from './_stack-item.model';
import { IProject } from './_project.model';
import { ICompany } from './_company.model';
import { DateAlike } from './_date-alike.model';

// export interface IWorkExperience {
//   company: ICompany;
//   project: any;
//   description: string;
//   responsibilities: string[];
//   stack: IStackItem[];
// }

export interface IWorkExperience {
  stack: IStackItem[],
  responsibilities: string[],
  project: IProject,
  description: string,
  company: string,
  dates?: [DateAlike, DateAlike],
  position: string
}

