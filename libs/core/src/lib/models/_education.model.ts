import { DateAlike } from './_date-alike.model';

export interface IEducationItem {
  establishment: string;
  specialty: string;
  start: DateAlike;
  end: DateAlike;
}
