import { gql } from 'graphql-request';

export const GET_CLASSES = gql`
  query fetchClasses {
    classes {
      description {
        markdown
        text
      }
      id
      name
      classSize
      price
      image {
        height
        width
        url
      }
      classCategory {
        id
        name
      }
    }
  }
`;
