import { Cruiseline } from "./CruiseLine";
import { Ship } from "./Ship";

export class Cruise {


    id?: number;
    cruiseName?: string;
    ship?: Ship;
    cruiseline?: Cruiseline;
    startdestination?: string;
    enddestination?: string;
    itinerary?: string[];
    startdate?: string;
    enddate?: string;
    price?: string;
  }
