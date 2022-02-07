import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("increment/counter");
export const decrement = createAction("decrement/counter");
export const incrementByAmount = createAction("incrementByAmount/counter");
