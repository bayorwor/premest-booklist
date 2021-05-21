import { useState } from "react";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import Header from "./components/Header";

const App = () => {
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([]);

  function handleShow() {
    setShow(!show);
  }

  function addBook(book) {
    setBooks([book, ...books]);
  }

  function deleteBook(title) {
    setBooks(books.filter((book) => book.title !== title));
  }

  return (
    <main>
      <Header handleShow={handleShow} show={show} />
      {show && <AddBook addBook={addBook} />}
      <BooksList books={books} deleteBook={deleteBook} />
    </main>
  );
};

export default App;
