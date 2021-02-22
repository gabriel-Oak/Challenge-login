import { ActionType } from '../../interfaces/redux'
import * as types from './types'

const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

const timer = (state = initialTimerState, { type, payload }: ActionType) => {
  switch (type) {
    case types.TICK:
      return {
        ...state,
        lastUpdate: payload.ts,
        light: !state.light,
      }
    default:
      return state;
  }
}

export default timer;