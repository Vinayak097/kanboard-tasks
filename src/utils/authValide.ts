import { string, z } from 'zod';

// Username schema
const usernameSchema = z.string({
    required_error: 'Username is required',
}).refine(value => value.length >= 3 && value.length <= 20, {
    message: 'Username should be between 3 and 20 letters',
});

// Password schema
const passwordSchema = z.string().min(3, { message: 'Password is too short' });

// User schema
export const userSchema = z.object({
    username: usernameSchema,
    password: passwordSchema
});

// TypeScript type for user schema
export type UserSchemaType = z.infer<typeof userSchema>;

// Add Todo schema
export const addTodoSchema = z.object({
    title: z.string().nonempty({ message: 'Title should not be empty' }),
    description: z.string().nonempty({ message: 'Description should not be empty' }),
    tag: z.string().nonempty({ message: 'Tag should not be empty' })
});

// TypeScript type for addTodo schema
export type AddTodoSchemaType = z.infer<typeof addTodoSchema>;
