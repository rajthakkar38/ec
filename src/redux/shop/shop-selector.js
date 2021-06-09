import { createSelector } from "reselect";

const selectShop = (state) => state.shopdata;

const collection_id_map = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectShopData = createSelector(
  [selectShop],
  (shopdata) => shopdata.Shop_Data
);

export const selectCollection = (urlprop) =>
  createSelector([selectShopData], (Shop_Data) =>
    Shop_Data.find((collection) => {
      return collection.id === collection_id_map[urlprop];
    })
  );
