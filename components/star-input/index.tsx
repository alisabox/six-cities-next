import React from 'react';
import { StarIcon } from '@/components/icons/star';

const RATINGS = ['perfect', 'good', 'not bad', 'bad', 'terrible'];

type Props = {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

export default function StarInput({ onChange, disabled, value }: Props) {
  return (
    RATINGS.map((rating, index) => (
      <React.Fragment key={rating}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={RATINGS.length - index}
          id={`${RATINGS.length - index}-stars`}
          type="radio"
          onChange={onChange}
          checked={Number(value) === (RATINGS.length - index)}
          disabled={disabled}
        />
        <label
          htmlFor={`${RATINGS.length - index}-stars`}
          className="reviews__rating-label form__rating-label"
          title={rating}
        >
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>
      </React.Fragment>
    ))
  );
}
