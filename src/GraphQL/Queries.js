import { gql } from "@apollo/client";

export const LOAD_BOOKS = gql`
{
    books{
        name,
        genre
    }
}
`