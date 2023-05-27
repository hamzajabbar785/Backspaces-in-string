// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


const cleanString = (str) => {
    let arr = []
    str.split("").map((el) => el !== "#" ? arr.push(el) : arr.pop())
    return arr.join("")
}