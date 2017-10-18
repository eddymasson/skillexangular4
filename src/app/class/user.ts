export { Team } from '../class/team'; 

export interface User {
  id: number;
   name: string;
   prenom: string;
   username: string;
   mail: string;
   admin: boolean;
   createdBy: User;
   createdAt: Date;
   active: boolean;
   activeAt: Date;
   activeUntil: Date;
   birthDate: Date;
   jobName: string;
    
}
