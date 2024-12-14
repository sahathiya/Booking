// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from '../Features/userSlice'
// import partnerSlice from "../Features/partnerSlice";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Use localStorage for persistence
// // const store=configureStore({
// //     reducer:{
// //         user:userSlice,
// //         partner:partnerSlice,
// //     }
// // })







// // Persist configuration
// const persistConfig = {
//     key: 'user', // Key for the persisted state
//     storage, // Use localStorage
//   };
//   const partnerPersistConfig = {
//     key: 'partner', // Key for the persisted state
//     storage, // Use localStorage
//   };
  
//   // Create a persisted reducer
//   const persistedUserReducer = persistReducer(persistConfig, userSlice);
//   const persistedPartnerReducer = persistReducer(partnerPersistConfig, partnerSlice);
  
//   // Configure store
//   const store = configureStore({
//     reducer: {
//       user: persistedUserReducer, 
//       posts: persistedPartnerReducer, 
     
//     },
//   });
//  export default store
//   // Create a persistor
//   export const persistor = persistStore(store);
  




import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Features/userSlice';
import partnerSlice from "../Features/partnerSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage
import propertySlice from '../Features/propertySlice'
// Persist configuration for user
const userPersistConfig = {
  key: 'user', // Key for the persisted state
  storage, // Use localStorage
};

// Persist configuration for partner
const partnerPersistConfig = {
  key: 'partner', // Key for the persisted state
  storage, // Use localStorage
};

const propertyPersistConfig={
  key:'property',
  storage,
}
// Create a persisted reducer for user
const persistedUserReducer = persistReducer(userPersistConfig, userSlice);

// Create a persisted reducer for partner
const persistedPartnerReducer = persistReducer(partnerPersistConfig, partnerSlice);
const persistedPropertyReducer =persistReducer(propertyPersistConfig,propertySlice)
// Configure the store with the persisted reducers
 export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    partner: persistedPartnerReducer, 
    property:persistedPropertyReducer
  },
});

// Export the store and the persistor
export const persistor = persistStore(store);

