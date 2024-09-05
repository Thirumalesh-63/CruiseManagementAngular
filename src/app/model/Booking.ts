import { Cruise } from "./Cruise";
import { Ship } from "./Ship";
import { User } from "./User";

export class Booking {
    id?: number;
    user?: User;
    cruise?: Cruise;
    bookingDate?: string;
    Payment?: string;
  }