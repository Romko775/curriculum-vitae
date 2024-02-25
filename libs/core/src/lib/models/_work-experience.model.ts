import { ICompany } from './_company.model';
import { IStackItem } from './_stack-item.model';

export interface IWorkExperience {
  company: ICompany;
  project: any;
  description: string;
  responsibilities: string[];
  stack: IStackItem[];
}
