import { z } from "zod";
declare const formSchema: z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    fullName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName: string;
}, {
    fullName: string;
}>, z.ZodDiscriminatedUnion<"hasWorkExperience", [z.ZodObject<{
    hasWorkExperience: z.ZodLiteral<true>;
    companyName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    hasWorkExperience: true;
    companyName: string;
}, {
    hasWorkExperience: true;
    companyName: string;
}>, z.ZodObject<{
    hasWorkExperience: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    hasWorkExperience: false;
}, {
    hasWorkExperience: false;
}>]>>, z.ZodDiscriminatedUnion<"knowsOtherLanguage", [z.ZodObject<{
    knowsOtherLanguage: z.ZodLiteral<true>;
    languages: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    knowsOtherLanguage: true;
    languages: {
        name: string;
    }[];
}, {
    knowsOtherLanguage: true;
    languages: {
        name: string;
    }[];
}>, z.ZodObject<{
    knowsOtherLanguage: z.ZodLiteral<false>;
}, "strip", z.ZodTypeAny, {
    knowsOtherLanguage: false;
}, {
    knowsOtherLanguage: false;
}>]>>, z.ZodDiscriminatedUnion<"educationLevel", [z.ZodObject<{
    educationLevel: z.ZodLiteral<"noFormalEducation">;
}, "strip", z.ZodTypeAny, {
    educationLevel: "noFormalEducation";
}, {
    educationLevel: "noFormalEducation";
}>, z.ZodObject<{
    educationLevel: z.ZodLiteral<"highSchoolDiploma">;
    schoolName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    educationLevel: "highSchoolDiploma";
    schoolName: string;
}, {
    educationLevel: "highSchoolDiploma";
    schoolName: string;
}>, z.ZodObject<{
    educationLevel: z.ZodLiteral<"bachlorsDegree">;
    universityName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    educationLevel: "bachlorsDegree";
    universityName: string;
}, {
    educationLevel: "bachlorsDegree";
    universityName: string;
}>]>>;
type FormSchema = z.infer<typeof formSchema>;
declare const formDefaultValues: FormSchema;
export { formSchema, formDefaultValues, type FormSchema };
