import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
};

function Checkout() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            {...register("firstName", {
              required: true,
              minLength: { value: 5, message: "please enter atlease 5 character" },
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label>Middle Name:</label>
          <input {...register("middleName")} />
        </div>
        <br />
        <div>
          <label>Last Name:</label>
          <input {...register("lastName")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Checkout;

// EMPLOYEEMENT FORM

import {
  Box,
  TextField,
  Paper,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Controller, FieldErrors, SubmitHandler, useFieldArray, useForm, useWatch } from "react-hook-form";
import { formDefaultValues, formSchema, FormSchema } from "../formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Banner from "./Banner";
import { AddCircleRounded, DeleteForeverRounded } from "@mui/icons-material";
import { useEffect } from "react";

function Checkout() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormSchema>({ mode: "all", resolver: zodResolver(formSchema), defaultValues: formDefaultValues });

  const { fields, append, remove, replace } = useFieldArray({ control, name: "languages" });

  const fullErrors: FieldErrors<Extract<FormSchema, { hasWorkExperience: true }>> &
    FieldErrors<Extract<FormSchema, { knowsOtherLanguage: true }>> &
    FieldErrors<Extract<FormSchema, { educationLevel: "noFormalEducation" }>> &
    FieldErrors<Extract<FormSchema, { educationLevel: "highSchoolDiploma" }>> &
    FieldErrors<Extract<FormSchema, { educationLevel: "bachlorsDegree" }>> = errors;

  const hasWorkExperience = useWatch({ control, name: "hasWorkExperience" });
  const knowsOtherLanguage = useWatch({ control, name: "knowsOtherLanguage" });
  const educationLevel = useWatch({ control, name: "educationLevel" });

  useEffect(() => {
    if (knowsOtherLanguage) {
      replace([{ name: "" }]);
    }
  }, [knowsOtherLanguage, replace]);

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    // alert(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data,null,2))
  };

  return (
    <>
      <Banner bannerText="Checkout" />
      <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Paper sx={{ bgcolor: "grey.300", width: 400, padding: 2 }}>
          <Stack sx={{ gap: 2 }}>
            <Typography variant="h6">Employemment Form</Typography>
            <TextField
              {...register("fullName")}
              label="Full Name"
              helperText={errors.fullName?.message}
              error={!!errors.fullName}
            />
            <FormControlLabel {...register("hasWorkExperience")} label="Work Experience?" control={<Checkbox />} />
            {hasWorkExperience && (
              <TextField
                {...register("companyName")}
                label="Company Name"
                helperText={fullErrors.companyName?.message}
                error={!!fullErrors.companyName}
              />
            )}
            <FormControlLabel {...register("knowsOtherLanguage")} label="Know Other Language?" control={<Checkbox />} />
            {knowsOtherLanguage && (
              <>
                {fields.map((field, index) => (
                  <div key={field.id}>
                    <TextField
                      sx={{ width: "100%" }}
                      {...register(`languages.${index}.name`)}
                      label="Language Name"
                      helperText={fullErrors.languages?.[index]?.name?.message}
                      error={!!fullErrors.languages?.[index]?.name?.message}
                    />
                    <IconButton disabled={fields.length === 1} onClick={() => remove(index)} color="error">
                      <DeleteForeverRounded />
                    </IconButton>
                  </div>
                ))}
                <IconButton sx={{ width: "fit-content" }} onClick={() => append({ name: "" })} color="success">
                  <AddCircleRounded />
                </IconButton>
              </>
            )}

            <FormControl>
              <FormLabel>Education Level</FormLabel>
              <Controller
                control={control}
                name="educationLevel"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel label="No Formal Education" value="noFormalEducation" control={<Radio />} />
                    <FormControlLabel label="High School Diploma" value="highSchoolDiploma" control={<Radio />} />
                    <FormControlLabel label="Bachlors Degree" value="bachlorsDegree" control={<Radio />} />
                  </RadioGroup>
                )}
              ></Controller>
              {educationLevel == "highSchoolDiploma" && (
                <TextField
                  {...register("schoolName")}
                  label="School Name"
                  helperText={fullErrors.schoolName?.message}
                  error={!!fullErrors.schoolName}
                />
              )}
              {educationLevel == "bachlorsDegree" && (
                <TextField
                  {...register("universityName")}
                  label="University Name"
                  helperText={fullErrors.universityName?.message}
                  error={!!fullErrors.universityName}
                />
              )}
            </FormControl>

            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default Checkout;

// import { SubmitHandler, useForm } from "react-hook-form";
// import { formValue, formType, defaultValues } from "../formSchema";
// import { zodResolver } from "@hookform/resolvers/zod";

// const Checkout = () => {
//   const { register, handleSubmit,watch } = useForm<formType>({
//     mode: "all",
//     resolver: zodResolver(formValue),
//     defaultValues: defaultValues,
//   });
//   const onSubmit: SubmitHandler<formType> = (data) => {
//     console.log(data);
//   };
//   const gender = watch("gender");
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" {...register("name")} />
//       <label>
//         <input type="radio" value="male" {...register("gender")} />
//         MALE
//       </label>
//       <label>
//         <input type="radio" value="female" {...register("gender")} />
//         FEMALE
//       </label>
//       {gender == "male" ? <input placeholder="Your Current Salary" /> : <input placeholder="Your Age" />}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Checkout;
