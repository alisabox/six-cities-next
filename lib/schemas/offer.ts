import { z } from 'zod';

export const favoriteStatusUpdateSchema = z.object({
  isFavorite: z.boolean(),
  offerId: z.number(),
});
