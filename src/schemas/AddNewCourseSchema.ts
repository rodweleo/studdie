import { z } from "zod"
 
export const AddNewCourseSchema = z.object({
  price: z.string().min(2).max(50),
  description: z.string().min(2)
})