export const MovieSearch = ({ onSearch }) => {
    const handleSubmit = e => {
      e.preventDefault();
      const query = e.target.elements.search.value;
      if (!query) return;
      onSearch(query);
      e.target.reset();
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What film do you search?"
          name="search"
          required
          autoFocus
        />
        <button type="submit">
            Search
        </button>
      </form>
    );
  };
  