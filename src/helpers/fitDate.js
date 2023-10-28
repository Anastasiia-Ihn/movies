import { getYear } from 'date-fns';

export const fitDate = date => getYear(new Date(date));
