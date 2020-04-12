import gql from 'graphql-tag';

const Mutations = {
  CREATE_USER: gql`
    query createUser($input: CreateUserInput!) {
      createUser(input: $input) {
        id
        name
        email
      }
    }
  `,
};

export default Mutations;
