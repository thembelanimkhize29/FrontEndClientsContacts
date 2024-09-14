import { Client } from "./client";

export interface Contact {
    id: number;
    name: string;
    surname: string;
    email: string;
    clients: Client[];
  }
