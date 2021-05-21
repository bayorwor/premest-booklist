const BooksList = ({ books, deleteBook }) => {
  return (
    <section className="books-container">
      {books.length > 0 ? (
        books.map((book) => (
          <div
            className="card"
            key={book.title}
            onClick={() => deleteBook(book.title)}
          >
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <h6>{book.release}</h6>
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: "center", backgroundColor: "#dedede" }}>
          Empty book list
        </h1>
      )}
    </section>
  );
};

export default BooksList;
