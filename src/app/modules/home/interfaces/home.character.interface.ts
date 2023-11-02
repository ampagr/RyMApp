import { Gender } from '../../shared/interfaces/character-interface';

export interface HomeCharacter {
  name: string;
  species: string;
  gender: Gender;
  image: string;
}
