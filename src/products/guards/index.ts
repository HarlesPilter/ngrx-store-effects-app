import { PizzasGuard } from './pizzas.guard';
import { ToppingsGuard } from './toppings.guard';
import { PizzasExistsGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzasGuard, PizzasExistsGuard, ToppingsGuard];

export * from './pizzas.guard';
export * from './toppings.guard';
export * from './pizza-exists.guard';
