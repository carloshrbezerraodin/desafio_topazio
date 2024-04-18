import { Companies } from "./companies";

export interface Person {
    name: string | null;
    rooms:  string[]
    age: string | null;
    gender: string;
    companies: Companies;

}