import { Gender } from '../../shared/interfaces/character-interface';

export interface HomeCharacter {
  id: number;
  name: string;
  species: string;
  gender: Gender;
  image: string;
}
