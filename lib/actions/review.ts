'use server';

import { addReview } from '@/lib/data';
import { reviewSchema } from '@/lib/schemas/review';
import { PostReviewType } from '@/lib/types/global';
import { FormState } from '@/lib/types/login';
import { convertZodErrors } from '@/lib/utils';

export const reviewSubmitAction = async ({ data, offerId, userId }:{
  data: PostReviewType,
  userId: number,
  offerId: number,
}):
Promise<FormState<PostReviewType>> => {
  const { success, error } = reviewSchema.safeParse(data);

  if (!success) {
    const errors = convertZodErrors(error);
    return {
      errors,
    };
  } else {
    await addReview({ data, offerId, userId });
    return { data };
  }
};
