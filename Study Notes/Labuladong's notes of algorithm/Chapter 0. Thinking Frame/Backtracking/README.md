# Backtracking (DFS, Depth First Search):

Backtracking is similar with DFS. The difference between them is that backtracking traverses _branches_ while DFS traverses _nodes_.

To solve backtracking problems, you just need to consider the subproblems:
* track, the choice or decision made.
* choices, the following choices you have.
* ending condition.

![Backtracking fig. I](https://labuladong.github.io/algo/images/backtracking/1.jpg)

![Backtracking fig. II](https://labuladong.github.io/algo/images/backtracking/2.jpg)

In figure II you can see:
* `2` is the track.
* `[1, 3]` are choices.
* ending condition is that the choices equal to `[]`.

![Backtracking fig. III](https://labuladong.github.io/algo/images/backtracking/3.jpg)

The template of backtracking:

``` js
// pseudo code

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

```

``` js
let result = [];

function backtrack(tracks, choices) {
    if (endingCondition) {
        result.add(track);
        return;
    }

    for (let choice of choices) {
        select();
        backtrack(track, choices);
        deselect();
    }
}
```

To understand the timing of `select()` and `deselect()`, we need to revisit the pre-order and post-order traversing of a tree.

![Backtracking fig. IV](https://labuladong.github.io/algo/images/backtracking/4.jpg)

![Backtracking fig. V](https://labuladong.github.io/algo/images/backtracking/5.jpg)

## Reference:

* [回溯算法解题套路框架](https://labuladong.github.io/algo/di-ling-zh-bfe1b/hui-su-sua-c26da/)
