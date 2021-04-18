import { gql } from 'graphql-request';

export const GET_GROUPS = gql`
  query groups {
    groups {
      description {
        markdown
      }
      id
      name
      slug
      image {
        height
        width
        url
      }
      classCategory {
        id
        name
        trainers {
          name
          slug
          trainerImage {
            height
            width
            url
          }
        }
      }
    }
  }
`;

export const GET_GROUP_DETAIL = gql`
  query groupDetail($slug: String!) {
    group(where: { slug: $slug }) {
      id
      name
      price
      slug
      duration
      classSize
      shift
      trainers {
        name
        id
        slug
        trainerImage {
          height
          width
          url
        }
      }
      description {
        markdown
        text
      }
      image {
        height
        width
        url
      }
      classCategory {
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

export const FEATURED_PRODUCTS = gql`
  query getFeaturedProducts {
    products(first: 3) {
      id
      name
      onSale
      price
      salePrice
      shortDescription
      slug
      image {
        height
        width
        url
      }
    }
  }
`;
export const ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      id
      name
      onSale
      price
      salePrice
      shortDescription
      slug
      image {
        height
        width
        url
      }
    }
  }
`;

export const PRODUCT = gql`
  query getProduct($slug: String!) {
    product(where: { slug: $slug }) {
      fullDescription {
        markdown
      }
      id
      name
      onSale
      price
      salePrice
      shortDescription
      slug
      image {
        height
        width
        url
      }
      productReviews(orderBy: id_ASC) {
        email
        id
        name
        rating
        title
        message {
          markdown
        }
      }
    }
    products(where: { slug_not: $slug }, first: 3) {
      id
      name
      onSale
      price
      slug
      salePrice
      image {
        height
        width
        url
      }
    }
  }
`;

export const PAGE_CONTENT = gql`
  query pageContents {
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
    products(first: 3) {
      id
      name
      onSale
      price
      salePrice
      slug
      image {
        height
        width
        url
      }
    }
    groups(first: 3) {
      id
      description {
        markdown
        text
      }
      name
      classSize
      price
      slug
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
    pricePlans {
      access
      freeRiding
      id
      name
      popular
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

export const TESTIMONIALS = gql`
  query testimonials {
    testimonies {
      name
      group
      id
      message {
        markdown
      }
      media {
        height
        width
        url
      }
    }
  }
`;
