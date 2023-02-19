import { IDictionary } from '../interfaces/Dictionary';

export interface INavigation
{
  [Key: string]: IDictionary<string>;
}