'use client';

import React, { useContext } from 'react';
import { BookmarkIcon } from '@/components/icons/bookmark';
import '@/public/css/main.css';
import { favoriteStatusUpdateAction } from '@/lib/actions/offer';
import { AuthContext } from '@/lib/context/auth';

type Props = {
  isFavorite?: boolean;
  offerId: number;
  className?: string;
};

export default function FavoriteButton({ isFavorite, offerId, className }: Props) {
  const [isFavoriteState, setIsFavoriteState] = React.useState(isFavorite);
  const { isAuth } = useContext(AuthContext);

  const handleFavoriteClick = async () => {
    setIsFavoriteState(prev => !prev);
    const { data } = await favoriteStatusUpdateAction({ isFavorite: !isFavoriteState, offerId });
    if (!data) setIsFavoriteState(isFavoriteState);
  };

  return isAuth ? (
    <button
      className={`${className}-button ${isFavoriteState ? className + '-button--active' : ''} button`}
      type="button"
      onClick={handleFavoriteClick}
    >
      <BookmarkIcon className={`${className}-icon`} width="18" height="19"/>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  ) : '';
}
