import { useState } from "react";

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [release, setRelease] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addBook({ title, author, release });
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={(t) => setTitle(t.target.value)}
          placeholder="book title"
        />
        <input
          type="text"
          onChange={(t) => setAuthor(t.target.value)}
          placeholder="author name"
        />
        <input
          type="date"
          onChange={(t) => setRelease(t.target.value)}
          placeholder="release date"
        />
        <input
          type="submit"
          style={{ backgroundColor: "steelblue", color: "white" }}
          value="ADD BOOK"
        />
      </form>
    </section>
  );
};

export default AddBook;
