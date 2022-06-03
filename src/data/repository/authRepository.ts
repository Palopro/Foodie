import { RegisterUserResponse } from '../dataSource/api/responses/registerUserResponse';
import { UserEntity } from '../dataSource/api/entity/UserEntity';
import { registerUser, loginUser } from '../dataSource/api/authService';

export const registerUserRepo = async (user: {
  email: string;
  password: string;
}) => {
  try {
    const response: RegisterUserResponse = await registerUser(user);

    return {
      user: UserEntity.parseFromSJON(response.user),
      error: null,
    };
  } catch (error) {
    return error.response.data;
  }
};

export const loginUserRepo = async (user: {
  email: string;
  password: string;
}) => {
  try {
    const response = await loginUser({
      identifier: user.email,
      password: user.password,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    return {
      jwt: response.jwt,
      user: UserEntity.parseFromSJON(response.user),
    };
  } catch (error) {
    return error;
  }
};
