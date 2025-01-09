import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/userSlice";
import partnerSlice from "../Features/partnerSlice";
import savedSlice from "../Features/savedSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import propertySlice from "../Features/propertySlice";
import bookingSlice from "../Features/bookingSlice";
import reviewSlice from "../Features/reviewSlice";
import adminSlice from "../Features/adminSlice"
const userPersistConfig = {
  key: "user",
  storage,
};

const partnerPersistConfig = {
  key: "partner",
  storage,
};
const adminPersistConfig={
  key:"admin",
  storage,
}
const propertyPersistConfig = {
  key: "property",
  storage,
};
const savedPersistConfig = {
  key: "saved",
  storage,
};
const bookingPersisting = {
  key: "booking",
  storage,
};

const reviewPersisting = {
  key: "review",
  storage,
};

const persistedReviewReducer = persistReducer(reviewPersisting, reviewSlice);
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

const persistedPartnerReducer = persistReducer(
  partnerPersistConfig,
  partnerSlice
);
const persistedAdminReducer=persistReducer(adminPersistConfig,adminSlice)


const persistedPropertyReducer = persistReducer(
  propertyPersistConfig,
  propertySlice
);
const persistedSavedReducer = persistReducer(savedPersistConfig, savedSlice);

const persistedbookingReducer = persistReducer(bookingPersisting, bookingSlice);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    partner: persistedPartnerReducer,
    property: persistedPropertyReducer,
    saved: persistedSavedReducer,
    booking: persistedbookingReducer,
    review: persistedReviewReducer,
    admin:persistedAdminReducer
  },
});

export const persistor = persistStore(store);
