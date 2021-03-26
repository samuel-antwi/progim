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

export const GET_ABOUT_PAGE = gql`
  query queryAboutPage($slug: String!) {
    page(where: { slug: $slug }) {
      award
      classRoom
      createdAt
      description
      equipment
      expertTrainers
      happyClient
      id
      list
      name
      personalTrainers
      slug
      subTitle
      title
      images {
        url
      }
      aboutImage {
        url
        width
        height
      }
    }
  }
`;

export const TRAINERS = gql`
  query queryTrainers {
    trainers {
      id
      name
      slug
      trainerImage {
        height
        width
        url
      }
      classCategories {
        name
        id
      }
    }
  }
`;

export const GET_ALL_PLANS = gql`
  query getAllPlans {
    pricePlans {
      access
      freeRiding
      id
      name
      personalTrainer
      price
      slug
      unlimitedEquipments
      yogaMeditation
      image {
        url
        width
        height
        fileName
      }
    }
  }
`;
