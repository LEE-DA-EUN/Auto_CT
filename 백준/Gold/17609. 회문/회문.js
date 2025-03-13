const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = parseInt(input[0]);

function Palindrome(check, left, right) {
    while (left < right) {
        if (check[left] !== check[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

for (let i = 1; i <= T; i++) {
    let left = 0;
    let right = input[i].length - 1;

    if (Palindrome(input[i], left, right)) {
        console.log(0);
        continue;
    }

    else{
        while (left < right) {
            if (input[i][left] !== input[i][right]) {
                if (Palindrome(input[i], left + 1, right) || Palindrome(input[i], left, right - 1)) {
                    console.log(1);
                } else {
                    console.log(2);
                }
                break;
            }
            left++;
            right--;
        }
    }
}