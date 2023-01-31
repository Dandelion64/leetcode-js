/* =========================================================
=       Sliding Window                                     =
========================================================= */

function slidingWindow(string) {
    const set = new Set();
    let start = 0;
    let end = 0;

    while (end < string.length) {
        while (set.has(string[end])) {
            set.delete(string[start]);

            ++start;
        }

        set.add(string[end]);

        ++end;
    }
}
