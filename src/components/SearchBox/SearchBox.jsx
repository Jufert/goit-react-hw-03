import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ handleFilter, value }) => {
  return (
    <div className={css.searchBox}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handleFilter}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
