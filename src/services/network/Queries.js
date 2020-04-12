import gql from 'graphql-tag';

const Queries = {
  GET_USER: gql`
    query getUser($email: String!, $password: String!) {
      getUser(email: $email, password: $password) {
        id
        name
        email
      }
    }
  `,
};

export default Queries;
