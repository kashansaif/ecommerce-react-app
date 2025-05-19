import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setCategoryState, setPriceState } from "../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
// import { MenuItem as abc } from "../Menu-Item";
import { filterBoth, filterCategory, filterPrice } from "../redux/productsSlice";
export default function SelectVariants() {
    const globalCategory = useAppSelector((state) => state.filter.category);
    const globalPrice = useAppSelector((state) => state.filter.price);
    const dispatch = useAppDispatch();
    const handleCategoryChange = (event) => {
        dispatch(setCategoryState(event.target.value));
    };
    const handlePriceChange = (event) => {
        if (event.target.value == "")
            dispatch(setPriceState(event.target.value));
        else
            dispatch(setPriceState(JSON.parse(event.target.value)));
        // console.log(JSON.parse(event.target.value));
    };
    // if (priceMin == "" && category == "") dispatch(addProducts(abc));
    if (globalCategory !== "" && globalPrice.min == 0)
        dispatch(filterCategory(globalCategory));
    if (globalPrice.min !== 0 && globalCategory == "")
        dispatch(filterPrice(Number(globalPrice.min)));
    if (globalPrice.min !== 0 && globalCategory !== "")
        dispatch(filterBoth({ minimumPrice: Number(globalPrice.min), category: globalCategory }));
    console.log(globalPrice);
    return (_jsxs("div", { className: "flex flex-wrap justify-around", children: [_jsxs(FormControl, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: [_jsx(InputLabel, { id: "demo-simple-select-standard-label", children: "Price Range" }), _jsxs(Select, { labelId: "demo-simple-select-standard-label", id: "demo-simple-select-standard", value: JSON.stringify(globalPrice), onChange: handlePriceChange, label: "Category", children: [_jsx(MenuItem, { value: "", children: _jsx("em", { children: "None" }) }), _jsx(MenuItem, { value: '{"min":1,"max":25}', children: "$0 - $150" }), _jsx(MenuItem, { value: '{"min":150,"max":600}', children: "$150 - $600" }), _jsx(MenuItem, { value: '{"min":600,"max":1000}', children: "$600 - $1000" }), _jsx(MenuItem, { value: '{"min":1000,"max":9999}', children: "$1000 Above" })] })] }), _jsxs(FormControl, { variant: "standard", sx: { m: 1, minWidth: 320 }, children: [_jsx(InputLabel, { id: "demo-simple-select-standard-label", children: "category" }), _jsxs(Select, { labelId: "demo-simple-select-standard-label", id: "demo-simple-select-standard", value: globalCategory, onChange: handleCategoryChange, label: "Category", children: [_jsx(MenuItem, { value: "", children: _jsx("em", { children: "None" }) }), _jsx(MenuItem, { value: "men's clothing", children: "men's clothing" }), _jsx(MenuItem, { value: "women's clothing", children: "women's clothing" }), _jsx(MenuItem, { value: "electronics", children: "electronics" }), _jsx(MenuItem, { value: "jewelery", children: "jewelery" })] })] })] }));
}
