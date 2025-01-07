import React from 'react';
import ReviewForm from '@/components/review-form';
import { MAX_RATING } from '@/lib/const';
import { ReviewsType } from '@/lib/types/global';

type ReviewsListProps = {
  reviews: ReviewsType[];
};

const MAX_NUMBER_OF_REVIEWS = 10;

export default function ReviewsList({ reviews }: ReviewsListProps) {
  const sortedReviews = reviews.length >= 10
    ? reviews.slice(reviews.length - MAX_NUMBER_OF_REVIEWS, reviews.length).reverse()
    : reviews.slice().reverse();
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{sortedReviews?.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => {
            const date = new Date(review.date);
            const dateTime = date.toISOString().substring(0, 10);
            const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });

            return (
              <li key={review.id} className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img
                      className="reviews__avatar user__avatar"
                      src={review.user.avatarUrl}
                      width="54"
                      height="54"
                      alt="Reviews avatar"
                    />
                  </div>
                  <span className="reviews__user-name">
                    {review.user.name}
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{ width: `${review.rating / MAX_RATING * 100}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {review.comment}
                  </p>
                  <time className="reviews__time" dateTime={dateTime}>{monthYear}</time>
                </div>
              </li>
            );
          })
        }
      </ul>
      <ReviewForm />
    </section>
  );
}
