/* =========================================================
=       Backtracking (Pseudo Code)                         =
========================================================= */

let result = [];

function backtrack(tracks, choices) {
    if (endingCondition) {
        result.add(tracks);
        return;
    }

    for (let choice of choices) {
        select();
        /*
        choices.remove(choice)
        tracks.add(choice)
        */

        backtrack(tracks, choices);

        deselect();
        /*
        tracks.remove(choice)
        choices.add(choice)
        */
    }
}
