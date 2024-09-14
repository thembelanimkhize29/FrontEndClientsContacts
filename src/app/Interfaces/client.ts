import { Contact } from "./contact";

export interface Client {
    id: number;
    firstName: string;
    clientCode: string;
    contacts: Contact[];
  }
