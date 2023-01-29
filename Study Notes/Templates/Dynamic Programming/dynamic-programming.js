/* =========================================================
=       Top-bottom Dynamic Programming (Pseudo Code)       =
========================================================= */

function dp(state1, state2) {
    let result;

    for (let choice of choices) {
        result = Math.extremum(result, dp(state1, state2));
    }

    return result;
}

/* =========================================================
=       Bottom-top Dynamic Programming (Pseudo Code)       =
========================================================= */

function dp(state1, state2) {
    // base case
    dp[0][0] = baseCase;

    for (let state1 of state1s) {
        for (let state2 of state2s) {
            dp[state1][state2] = Math.extremum(choice1, choice2);
        }
    }
}
