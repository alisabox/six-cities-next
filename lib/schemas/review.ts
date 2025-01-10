import { z } from 'zod';

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(50, { message: 'Describe your stay with at least 50 characters.' })
    .max(300, { message: 'Describe your stay with less than 300 characters.' }),
});
