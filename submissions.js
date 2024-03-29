"use-strict";

// To make a submission, add a new bot instance to the array
//
// Please ensure that your bot's evaluation function:
//
// 1. executes reasonably fast. There is a hard limit of 1000ms per call, but please
//      try to keep it much lower than that if possible. Remember that the size of the playfield
//      increases as the player count increases, and that other people's computers
//      may be slower than yours
//
// 2. is 100% deterministic (i.e. will always return the same output given the same input state)
//      However, carrying state across executions (e.g. for caching) is permitted.
//      If you choose to do this, ensure that the function is still 100% deterministic;
//      you may enclose variables in an IIFE
//
// 3. does not attempt to tamper with the judging system, modify global variables,
//      or anything else illegal
//
// Best of luck!

const SUBMISSIONS = [
  new Bot("Blind Bot", "TheSilican", (state) => {
    const [x, y] = state.getSelf();
    if (state.get(x, y + 1) === " ") {
      return "N";
    } else if (state.get(x + 1, y) === " ") {
      return "E";
    } else if (state.get(x, y - 1) === " ") {
      return "S";
    } else if (state.get(x - 1, y) === " ") {
      return "W";
    }
    return "N";
  }),
];
