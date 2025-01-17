'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import StarInput from '@/components/star-input';
import { reviewSubmitAction } from '@/lib/actions/review';
import { reviewSchema } from '@/lib/schemas/review';
import { PostReviewType } from '@/lib/types/global';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

export default function ReviewForm() {
  // const id = useParams()?.id as string;

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    setValue,
    watch
  } = useForm<PostReviewType>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: undefined,
      comment: '',
    },
    mode: 'onChange'
  });

  const handleRatingChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('rating', Number(e.target.value));
  }, [setValue]);

  const onSubmit = async (data: PostReviewType) => {
    const { successMsg } = await reviewSubmitAction(data);
    if (successMsg) {
      toast.success(successMsg);
      reset();
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit(onSubmit)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <StarInput
          value={watch().rating}
          onChange={handleRatingChange}
        />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        {...register('comment', {
          minLength: {
            value: MIN_REVIEW_LENGTH,
            message: 'Describe your stay with at least 50 characters.'
          }
        })}
        maxLength={MAX_REVIEW_LENGTH}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating
          </span> and describe your stay with at least <b className="reviews__text-amount">
            50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >Submit</button>
      </div>
    </form>
  );
}
