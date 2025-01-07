import React from 'react';
import { useState, ChangeEvent, SyntheticEvent, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { StarIcon } from '@/components/icons/star';
import { PostReviewType } from '@/lib/types/global';

type OfferParams = {
  id: string;
};

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

export default function ReviewForm() {
  const params = useParams<OfferParams>();
  const id = parseInt(params.id!, 10);

  const isPostSuccessfull = true;
  const isPostError = false;

  const [review, setReview] = useState<PostReviewType>({
    comment: '',
    rating: 0,
  });

  const [disabledForm, setDisabledForm] = useState(false);

  const { comment, rating } = review;
  const isSubmitDisabled = comment.length < MIN_REVIEW_LENGTH || rating === 0;

  const handleStarClick = (evt: ChangeEvent<HTMLInputElement>) => {
    setReview({
      comment,
      rating: parseInt(evt.target.value, 10),
    });
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      comment: evt.target.value,
      rating,
    });
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setDisabledForm(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(postReview(id, review));
  };

  useEffect(() => {
    if (isPostSuccessfull) {
      setReview({
        comment: '',
        rating: 0,
      });
      setDisabledForm(false);
    }
    if (isPostError) {
      setDisabledForm(false);
    }
  }, [isPostError, isPostSuccessfull]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" >
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={handleStarClick}
          checked={review.rating === 5}
          disabled={disabledForm}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={handleStarClick}
          checked={review.rating === 4}
          disabled={disabledForm}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={handleStarClick}
          checked={review.rating === 3}
          disabled={disabledForm}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={handleStarClick}
          checked={review.rating === 2}
          disabled={disabledForm}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={handleStarClick}
          checked={review.rating === 1}
          disabled={disabledForm}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
        value={comment}
        maxLength={MAX_REVIEW_LENGTH}
        disabled={disabledForm}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating
          </span> and describe your stay with at least <b className="reviews__text-amount">
            50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled || disabledForm}
        >Submit</button>
      </div>
    </form>
  );
}
