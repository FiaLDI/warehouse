import { z } from "zod";

export const schema = z.object({
    email: z.string().email("Uncorrect format email"),
    password: z.string().min(8, "Min length 8"),
});

export const schemaRegistration = z.object({
    email: z.string().email("Uncorrect format email"),
    username: z.string().min(8, "Min length 8"),
    password: z.string().min(8, "Min length 8"),
    phoneNumber: z.string().min(11, "Min length 11"),
    name: z.string().min(8, "Min length 8"),
    secondName: z.string().min(8, "Min length 8"),
    age: z.number(),
    gender: z.string().min(4, "Min length 4"),
    aboutUser: z.string(),
});
