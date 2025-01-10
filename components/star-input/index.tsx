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
          value={index + 1}
          id={`${index + 1}-stars`}
          type="radio"
          onChange={onChange}
          checked={Number(value) === (index + 1)}
          disabled={disabled}
        />
        <label htmlFor={`${index + 1}-stars`} className="reviews__rating-label form__rating-label" title={rating}>
          <StarIcon className="form__star-image" width="37" height="33"/>
        </label>
      </React.Fragment>
    ))
  );
}
