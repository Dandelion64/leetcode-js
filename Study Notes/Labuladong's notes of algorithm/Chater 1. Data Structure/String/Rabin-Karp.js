/**
 * Reference: Labuladong's notes of algorithms
 * https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-48c1d/hua-dong-c-88113/
 *
 * Reference: Rabin-Karp algorithm - Wikipedia
 * https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
 */

/* =========================================================
=       Translate a String to a Number                     =
========================================================= */

function stringtoNumber(s) {
    let number = 0;

    for (let i = 0; i < s.length; ++i) {
        number = 10 * number + Number(s[i]);

        // console.log(number);
    }
}

/* =========================================================
=       Append a Digit to the Tail of the Number           =
========================================================= */

function appendDigitAtTail(number, appendValue, radix) {
    number = number * radix + appendValue;
}

/* =========================================================
=       Remove the Digit at the Head of the Number         =
========================================================= */

function removeDigitAtHead(number, removeValue, radix) {
    const length = number.length;
    number = number - removeValue * (radix ** (length - 1));
}

/* =========================================================
=       Example 1.                                         =
========================================================= */

// leetcode problem 187. repeated DNA sequences

/* =========================================================
=       Example 2.                                         =
========================================================= */

// finding pats (sequences) in txt

function search(txt, pat) {
    const m = txt.length;
    const n = pat.length;
    const radix = 256; // ASCII codes range: [0, 255]
    const d = 1658598167; //divisor

    // to reduce the possibilities of hash collisions
    // d should be a larger prime number

    let nvfr = 1; // numerical value for removal

    for (let i = 0; i < n; ++i) {
        nvfr = (nvfr * radix) % d;
    }

    let pHash = 0; // patHash

    for (let i = 0; i < n; ++i) {
        pHash = (pHash * radix + pat.charCodeAt(i)) % d;
    }

    let wHash = 0; // windowHash

    let l = 0, r = 0; // left & right pointers

    while (r < m) {
        wHash = ((wHash * radix) % d + txt.charCodeAt(r)) % d;

        ++r;

        if (r - l === n) {
            if (wHash === pHash) {
                // assure that substring equals to pat
                if (txt.substring(l, r) === pat) {
                    return l;
                }
            }

            wHash = (wHash - (txt.charCodeAt(l) * nvfr) % d + d) % d;

            ++l;
        }
    }


    return -1;
}
