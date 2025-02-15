import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/auth";
import { productApi } from "../services/api";
import authReducer from "../features/auth/authSlices";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
