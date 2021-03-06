import gql from 'graphql-tag';

const TOGGLE_SHOW_ARCHIVED = gql` 
  mutation TOGGLE_SHOW_ARCHIVED($showArchived: Boolean) @client{
    showArchived: toggleShowArchived(showArchived: $showArchived) @client {
      showArchived @client
    }
  }
`;

export default TOGGLE_SHOW_ARCHIVED;
