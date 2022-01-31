import React from "react";

const Filter = ({ handleInput, search, results, rating }) => {
  return (
    <div>
      <section className="filter">
        <header>
          <h1>Movie Database</h1>
        </header>
        <div>
          <input
            type="text"
            className="searchbox"
            placeholder="search..."
            onChange={handleInput}
            onKeyPress={search}
          />
        </div>

        <div className="select">
          <select onChange={rating}>
            <option value="0">Rating:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Filter;
