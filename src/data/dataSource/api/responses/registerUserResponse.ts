import { UserEntity } from '../entity/UserEntity';

export interface RegisterUserResponse {
  user: UserEntity;
  error: any;
}
