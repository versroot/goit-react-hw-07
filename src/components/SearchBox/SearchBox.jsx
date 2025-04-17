import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  return (
    <form className={css.searchForm}>
      <label>Find contacts by name</label>
      <input
        clssName={css.searchInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
