
import * as types from './types'

export const startClock = () => ({ type: types.START_CLOCK });

export const serverRenderClock = () => ({
  type: types.TICK,
  payload: { light: false, ts: Date.now() },
});

