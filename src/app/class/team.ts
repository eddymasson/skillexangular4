import { User } from '../class/user';  
import { Module } from '../class/module'; 
export interface Team {
    id: number;
     name: string;
     prenom: string;
     createdAt: Date;
     pilote: User;
     module: Module;
  users : Array<{user}>;
  }