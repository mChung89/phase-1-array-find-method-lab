// code your solution here
// function winFind(win) {
//     return win.result === "W"
// }

// function superbowlWin(array) {
//     const req = array.find(winFind);
//     if (req) {
//         return req.year
//     } else return undefined
// }


// function superbowlWin(array) {
//   const found = array.find(w => w.result === "W");
//     if (found) {
//         return found.year
//     }
// }

// use ternary
// function superbowlWin(array) {
//     const found = array.find(w => w.result === "W");
//     return found ? found.year: undefined;
// }

//refactored

function superbowlWin(array) {
    const found = array.find(w => w.result === "W");
    return found && found.year
}