'use server';

import { reviewSchema } from '@/lib/schemas/review';
import { PostReviewType } from '@/lib/types/global';
import { FormState } from '@/lib/types/login';
import { convertZodErrors } from '@/lib/utils';

export const reviewSubmitAction = async (data: PostReviewType):
Promise<FormState<PostReviewType>> => {
  const { success, error } = reviewSchema.safeParse(data);

  if (!success) {
    const errors = convertZodErrors(error);
    return {
      errors,
    };
  } else {
    return { successMsg: 'Submitted the review successfully.' };
  }
};
