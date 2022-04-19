function reverseString(str) {
  // type your code here
  if (str === "") {
    return str
  }
  // separate into arr
  const newArr = []
  // push each to new array
  for (const elem of str) {
    newArr.unshift(elem)
  }
  // array to string
  result = newArr.join("")
  return result

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
