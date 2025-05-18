import { z } from "zod";

const hasWorkExperience = z.discriminatedUnion("hasWorkExperience", [
  z.object({ hasWorkExperience: z.literal(true), companyName: z.string().min(1) }),
  z.object({ hasWorkExperience: z.literal(false) }),
]);

const knowsOtherLanguage = z.discriminatedUnion("knowsOtherLanguage", [
  z.object({
    knowsOtherLanguage: z.literal(true),
    languages: z.array(z.object({ name: z.string().min(1) })),
  }),
  z.object({
    knowsOtherLanguage: z.literal(false),
  }),
]);

const educationSchema = z.discriminatedUnion("educationLevel", [
  z.object({
    educationLevel: z.literal("noFormalEducation"),
  }),
  z.object({
    educationLevel: z.literal("highSchoolDiploma"),
    schoolName: z.string().min(1),
  }),
  z.object({
    educationLevel: z.literal("bachlorsDegree"),
    universityName: z.string().min(1),
  }),
]);

const formSchema = z
  .object({
    fullName: z.string().min(1),
  })
  .and(hasWorkExperience)
  .and(knowsOtherLanguage)
  .and(educationSchema);

type FormSchema = z.infer<typeof formSchema>;

const formDefaultValues: FormSchema = {
  fullName: "",
  hasWorkExperience: false,
  knowsOtherLanguage: false,
  educationLevel: "noFormalEducation",
};

export { formSchema, formDefaultValues, type FormSchema };

// BREAK
// const gender = z.object({
//   gender: z.union([z.enum(["male", "female"]), z.null()]),
// });

// const formValue = z
//   .object({
//     name: z.string().min(1),
//   })
//   .and(gender);

// type formType = z.infer<typeof formValue>;

// const defaultValues: formType = { name: "", gender: "male" };

// export { type formType, formValue, defaultValues };
