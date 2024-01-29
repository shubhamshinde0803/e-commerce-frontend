import { api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const getCart = (reqData) => async (dispatch) => {
  // debugger;
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get(`/api/cart/`);
    console.log("cart: ", data);
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  // debugger;
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    console.log("reqData: ", reqData);
    const { data } = await api.put("/api/cart/add", reqData);
    console.log("data: ", data);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeItemToCart = (cartItemId) => async (dispatch) => {
  // debugger;
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(`/api/cart_item/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};

export const updateItemToCart = (reqData) => async (dispatch) => {
  // debugger;
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    // console.log("reqdata: ", reqData.data.quantity);
    const { data } = await api.put(`/api/cart_item/${reqData.cartItemId}?quantity=${reqData.data.quantity}`,reqData);
    
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};
