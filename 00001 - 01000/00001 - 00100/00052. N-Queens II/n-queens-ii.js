/* =========================================================
=       Solution 1. backtracking: O(n * n!)                =
========================================================= */

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
    let result = 0;

    if (n === 0) {
        return result;
    }

    const chessboard = Array.from({ length: n }, () => Array(n).fill('.'));

    /**
     * @param {string[][]} chessboard
     * @param {number} row
     * @param {number} col
     * @return {boolean}
     */
    const isValid = (chessboard, row, col) => {
        // if queen exists top, invalid.
        for (let i = 0; i < row; ++i) {
            if (chessboard[i][col] === 'Q') {
                return false;
            }
        }

        // if queen exists top-left, invalid.
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            if (chessboard[i][j] === 'Q') {
                return false;
            }
        }

        // if queen exists top-right, invalid.
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
            if (chessboard[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    /**
     * @param {number} n
     * @param {string[][]} chessboard
     * @param {number} row
     * @return {string[]}
     */
    const backtrack = (n, chessboard, row) => {
        if (row === n) {
            ++result;
            return;
        }

        for (let col = 0; col < n; ++col) {
            if (!isValid(chessboard, row, col)) {
                continue;
            }

            chessboard[row][col] = 'Q';
            backtrack(n, chessboard, row + 1);
            chessboard[row][col] = '.';
        }
    }

    backtrack(n, chessboard, 0);

    return result;
};
