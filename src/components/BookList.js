import { useQuery } from "@apollo/client";
import { LOAD_BOOKS } from "../GraphQL/Queries";


function BookList() {
    const { loading, error, data } = useQuery(LOAD_BOOKS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.books.map(({ name, genre },i) => (
        <div key={i}>
          <p>
            {name}: {genre}
          </p>
        </div>
      ));
}

export default BookList