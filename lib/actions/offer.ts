'use server';

import { updateOfferFavoriteStatus } from '@/lib/data';
import { favoriteStatusUpdateSchema } from '@/lib/schemas/offer';
import { FavoriteStatusUpdateType, OffersType } from '@/lib/types/global';
import { FormState } from '@/lib/types/login';
import { convertZodErrors } from '@/lib/utils';

export const favoriteStatusUpdateAction = async (data: FavoriteStatusUpdateType):
Promise<FormState<OffersType>> => {
  const { success, error } = favoriteStatusUpdateSchema.safeParse(data);

  if (!success) {
    const errors = convertZodErrors(error);
    return {
      errors,
    };
  } else {
    const updatedOffer = await updateOfferFavoriteStatus({ isFavorite: data.isFavorite, offerId: data.offerId });
    return { successMsg: 'Updated the offer status successfully.', data: updatedOffer };
  }
};
