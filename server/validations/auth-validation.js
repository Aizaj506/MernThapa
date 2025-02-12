const { z, object } = require('zod');

const registerSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .min(3,"Name must be at least 3 characters long")
    .max(100)
    .trim(),

    email: z
    .string()
    .email("Invalid email format")
    .trim().toLowerCase(),

    phone: z
    .string()
    .length(10,"Phone number should be 10 digit")
    .regex(/^\d+$/), // Ensures phone is exactly 10 digits

    password: z
    .string()
    .min(6,"Password must be at least 6 characters long")
    .max(20, "Password cannot be longer than 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one digit"),

    isAdmin: z
    .boolean()
    .optional(),
})

const loginSchema = z.object({
    email: z
    .string()
    .email("Invalid email format")
    .trim().toLowerCase(),

    password: z
    .string()
    .min(6,"Invalid Credentials")
    .max(20, "Invalid Credentials")

})

module.exports = { registerSchema, loginSchema };