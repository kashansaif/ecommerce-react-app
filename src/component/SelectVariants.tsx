import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ObjPrice, setCategoryState, setPriceState } from "../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
// import { MenuItem as abc } from "../Menu-Item";
import { filterBoth, filterCategory, filterPrice } from "../redux/productsSlice";

export default function SelectVariants() {
  const globalCategory = useAppSelector((state) => state.filter.category);
  const globalPrice: ObjPrice = useAppSelector((state) => state.filter.price);

  const dispatch = useAppDispatch();

  const handleCategoryChange = (event: SelectChangeEvent) => {
    dispatch(setCategoryState(event.target.value));
  };
  const handlePriceChange = (event: SelectChangeEvent) => {
    if (event.target.value == "") dispatch(setPriceState(event.target.value));
    else dispatch(setPriceState(JSON.parse(event.target.value)));
    // console.log(JSON.parse(event.target.value));
  };

  // if (priceMin == "" && category == "") dispatch(addProducts(abc));
  if (globalCategory !== "" && globalPrice.min == 0) dispatch(filterCategory(globalCategory));
  if (globalPrice.min !== 0 && globalCategory == "") dispatch(filterPrice(Number(globalPrice.min)));
  if (globalPrice.min !== 0 && globalCategory !== "")
    dispatch(filterBoth({ minimumPrice: Number(globalPrice.min), category: globalCategory }));

  console.log(globalPrice);
  return (
    <div className="flex flex-wrap justify-around">
      {/* CATEGORY..... */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Price Range</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={JSON.stringify(globalPrice)}
          onChange={handlePriceChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='{"min":1,"max":25}'>$0 - $150</MenuItem>
          <MenuItem value='{"min":150,"max":600}'>$150 - $600</MenuItem>
          <MenuItem value='{"min":600,"max":1000}'>$600 - $1000</MenuItem>
          <MenuItem value='{"min":1000,"max":9999}'>$1000 Above</MenuItem>

          {/* <MenuItem value="{min:10,max:25}">$10 - $25</MenuItem>
          <MenuItem value="{min:25,max:50}">$25 - $50</MenuItem>
          <MenuItem value="{min:50,max:100}">$50 - $100</MenuItem>
          <MenuItem value="{min:100,max:200}">$100 - $200</MenuItem>
          <MenuItem value="{min:200,max:500}">$200 - $500</MenuItem>
          <MenuItem value="{min:501,max:999999}">$500 and above</MenuItem> */}
        </Select>
      </FormControl>
      {/* PRICE RANGE..... */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 320 }}>
        <InputLabel id="demo-simple-select-standard-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={globalCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
          <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
          <MenuItem value={"electronics"}>electronics</MenuItem>
          <MenuItem value={"jewelery"}>jewelery</MenuItem>
        </Select>
      </FormControl>
      {/* <button className="border border-red-500 h-8 px-2 rounded-md my-auto">Reset Wishlist</button>
      <button className="border border-red-950 h-8 px-2 rounded-md my-auto">Reset Cart</button> */}
    </div>
  );
}
