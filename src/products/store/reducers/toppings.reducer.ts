import * as fromToppings from '../actions/toppings.actions';
import { Topping } from "../../models/topping.model";
import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.actions";
import { PizzaState } from "./pizzas.reducer";

export interface ToppingState {
  entities: {[id: number]: Topping},
  loaded: boolean,
  loading: boolean,
  selectedToppings: number[]
}

export const initialState: ToppingState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingState {
  switch(action.type) {
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings
      }
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
        loaded: false
      }
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: {[id: number]: Topping}, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping
          }
        },
        {
          ...state.entities
        });

        return {
          ...state,
          entities,
          loading: false,
          loaded: true
        };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getToppingsEntities = (state: ToppingState) => state.entities;
export const getToppingsLoading = (state: ToppingState) => state.loading;
export const getToppingsLoaded = (state: ToppingState) => state.loaded;
export const getSelectedToppings = (state: ToppingState) => state.selectedToppings;
