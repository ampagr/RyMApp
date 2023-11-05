import { Gender, Status, Location } from "./character-interface";

export interface Card {
  id?:       number;
  name:     string;
  status?:   Status;
  species:  string;
  type?:     string;
  gender:   Gender;
  origin?:   Location;
  location?: Location;
  image:    string;
  episode?:  string[];
  url?:      string;
  created?:  string;
}




