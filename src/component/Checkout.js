import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
function Checkout() {
    const { register, handleSubmit, 
    // watch,
    formState: { errors }, } = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (_jsx(_Fragment, { children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { children: [_jsx("label", { children: "First Name:" }), _jsx("input", { ...register("firstName", {
                                required: true,
                                minLength: { value: 5, message: "please enter atlease 5 character" },
                            }) }), errors.firstName && _jsx("p", { children: errors.firstName.message })] }), _jsx("br", {}), _jsxs("div", { children: [_jsx("label", { children: "Middle Name:" }), _jsx("input", { ...register("middleName") })] }), _jsx("br", {}), _jsxs("div", { children: [_jsx("label", { children: "Last Name:" }), _jsx("input", { ...register("lastName") })] }), _jsx("button", { type: "submit", children: "Submit" })] }) }));
}
export default Checkout;
// EMPLOYEEMENT FORM
import { Box, TextField, Paper, Stack, Typography, FormControlLabel, Checkbox, Button, IconButton, FormControl, FormLabel, RadioGroup, Radio, } from "@mui/material";
import { Controller, useFieldArray, useWatch } from "react-hook-form";
import { formDefaultValues, formSchema } from "../formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Banner from "./Banner";
import { AddCircleRounded, DeleteForeverRounded } from "@mui/icons-material";
import { useEffect } from "react";
function Checkout() {
    const { register, formState: { errors }, control, handleSubmit, } = useForm({ mode: "all", resolver: zodResolver(formSchema), defaultValues: formDefaultValues });
    const { fields, append, remove, replace } = useFieldArray({ control, name: "languages" });
    const fullErrors = errors;
    const hasWorkExperience = useWatch({ control, name: "hasWorkExperience" });
    const knowsOtherLanguage = useWatch({ control, name: "knowsOtherLanguage" });
    const educationLevel = useWatch({ control, name: "educationLevel" });
    useEffect(() => {
        if (knowsOtherLanguage) {
            replace([{ name: "" }]);
        }
    }, [knowsOtherLanguage, replace]);
    const onSubmit = (data) => {
        // alert(JSON.stringify(data, null, 2));
        alert(JSON.stringify(data, null, 2));
    };
    return (_jsxs(_Fragment, { children: [_jsx(Banner, { bannerText: "Checkout" }), _jsx(Box, { sx: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }, children: _jsx(Paper, { sx: { bgcolor: "grey.300", width: 400, padding: 2 }, children: _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(Typography, { variant: "h6", children: "Employemment Form" }), _jsx(TextField, { ...register("fullName"), label: "Full Name", helperText: errors.fullName?.message, error: !!errors.fullName }), _jsx(FormControlLabel, { ...register("hasWorkExperience"), label: "Work Experience?", control: _jsx(Checkbox, {}) }), hasWorkExperience && (_jsx(TextField, { ...register("companyName"), label: "Company Name", helperText: fullErrors.companyName?.message, error: !!fullErrors.companyName })), _jsx(FormControlLabel, { ...register("knowsOtherLanguage"), label: "Know Other Language?", control: _jsx(Checkbox, {}) }), knowsOtherLanguage && (_jsxs(_Fragment, { children: [fields.map((field, index) => (_jsxs("div", { children: [_jsx(TextField, { sx: { width: "100%" }, ...register(`languages.${index}.name`), label: "Language Name", helperText: fullErrors.languages?.[index]?.name?.message, error: !!fullErrors.languages?.[index]?.name?.message }), _jsx(IconButton, { disabled: fields.length === 1, onClick: () => remove(index), color: "error", children: _jsx(DeleteForeverRounded, {}) })] }, field.id))), _jsx(IconButton, { sx: { width: "fit-content" }, onClick: () => append({ name: "" }), color: "success", children: _jsx(AddCircleRounded, {}) })] })), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Education Level" }), _jsx(Controller, { control: control, name: "educationLevel", render: ({ field }) => (_jsxs(RadioGroup, { ...field, children: [_jsx(FormControlLabel, { label: "No Formal Education", value: "noFormalEducation", control: _jsx(Radio, {}) }), _jsx(FormControlLabel, { label: "High School Diploma", value: "highSchoolDiploma", control: _jsx(Radio, {}) }), _jsx(FormControlLabel, { label: "Bachlors Degree", value: "bachlorsDegree", control: _jsx(Radio, {}) })] })) }), educationLevel == "highSchoolDiploma" && (_jsx(TextField, { ...register("schoolName"), label: "School Name", helperText: fullErrors.schoolName?.message, error: !!fullErrors.schoolName })), educationLevel == "bachlorsDegree" && (_jsx(TextField, { ...register("universityName"), label: "University Name", helperText: fullErrors.universityName?.message, error: !!fullErrors.universityName }))] }), _jsx(Button, { variant: "contained", onClick: handleSubmit(onSubmit), children: "Submit" })] }) }) })] }));
}
export default Checkout;
