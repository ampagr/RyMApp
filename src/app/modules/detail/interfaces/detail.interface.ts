export interface DetailCharacter {
  id:       number;
  name:     string;
  status:   Status;
  species:  string;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
}

export enum Gender {
  FEMALE = "Female",
  GENDERLESS = "Genderless",
  MALE = "Male",
  UNKNOWN = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Status {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}
