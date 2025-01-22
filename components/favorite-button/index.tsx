'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const handleFavoriteClick = async () => {
    setIsFavoriteState(prev => !prev);
    try {
      await favoriteStatusUpdateAction({ isFavorite: !isFavoriteState, offerId });
      router.refresh();
    } catch (error) {
      setIsFavoriteState(isFavoriteState);
      console.error(error);
    }
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
