import { pipe, object, string, email, type InferOutput, minLength, optional } from 'valibot'

export const createBookSchema = object({
  name: pipe(string(), minLength(4, 'Has to be at least 4 characters.')),
  description: optional(string()),
})
