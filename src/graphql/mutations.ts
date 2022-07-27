import { gql } from '@apollo/client';

const loginUserMutation = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
      }
    }
  }
`;

export { loginUserMutation };
