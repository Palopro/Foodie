import { User } from '../../../../domain/model/user';

export interface UserDTO {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
}

export const mapToUser = (userDTO: UserDTO) =>
  new User(userDTO.id, userDTO.username, userDTO.email);
