import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/userSlice";
import partnerSlice from "../Features/partnerSlice";
import savedSlice from"../Features/savedSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import propertySlice from "../Features/propertySlice";

const userPersistConfig = {
  key: "user",
  storage,
};

const partnerPersistConfig = {
  key: "partner",
  storage,
};

const propertyPersistConfig = {
  key: "property",
  storage,
};

// const savedPersisting={
//   key:"saved",
//   storage,
// }
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

const persistedPartnerReducer = persistReducer(
  partnerPersistConfig,
  partnerSlice
);
const persistedPropertyReducer = persistReducer(
  propertyPersistConfig,
  propertySlice
);

// const persistedsavedReducer = persistReducer(
//   savedPersisting,
//   savedSlice
// );

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    partner: persistedPartnerReducer,
    property: persistedPropertyReducer,
    saved:savedSlice
  },
});

export const persistor = persistStore(store);
