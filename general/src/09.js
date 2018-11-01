// binary search
function* range(start, end) {
    yield start;
    if (start === end) return;
    yield* range(start + 1, end);
}

let nums = [...range(1, 20)];


function binarySearch(arr, num) {

}

console.log(nums);