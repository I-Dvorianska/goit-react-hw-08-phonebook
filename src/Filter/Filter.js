import { Wrapper, Input, Label } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFilterName, resetPage } from "../redux/Contacts/actions";
import { filter } from "../redux/Selectors/filterSelectors";

const Filter = () => {
  const formFilter = useSelector(filter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contact by name</Label>
      <Input
        type="text"
        name="filter"
        value={formFilter}
        onChange={(e) => {
          dispatch(getFilterName(e.target.value.toLowerCase()));
          dispatch(resetPage(0));
        }}
      />
    </Wrapper>
  );
};

export default Filter;
