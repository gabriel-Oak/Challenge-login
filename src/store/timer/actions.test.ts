import types from "./types";
import { serverRenderClock, startClock } from "./actions";

describe('Timer Actions Tests', () => {

  it('Should start clock', () => {
    expect(startClock()).toEqual({
      type: types.START_CLOCK,
    });
  });


  it('Should start clock', () => {
    expect(serverRenderClock().type).toBe(types.TICK);
  });

});