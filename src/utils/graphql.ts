import { gql } from '@apollo/client';

export const GetAllItems = gql`
  query GetAllItems($page: Int!) {
    characters(page: $page, filter: { status: "alive" }) {
      info {
        count
        pages
        next
      }
      results {
        id
        name
        image
      }
    }
  }
`;
