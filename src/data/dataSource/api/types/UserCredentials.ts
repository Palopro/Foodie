export interface LoginUserCredentials {
  userCredentials: {
    identifier: string;
    password: string;
  };
}

export interface RegisterUserCredentials {
  userCredentials: {
    username: string;
    email: string;
    password: string;
  };
}
