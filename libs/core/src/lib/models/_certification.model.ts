import { DateAlike } from './_date-alike.model';

export interface ICertificationItem {
  id: string;
  title: string;
  issueDate: DateAlike;
  validationUrl?: string;
  issuer?: string;
}
