// program to reverse the string
function removeSpaces() {

    // Take input from the user
    const str = (document.getElementById("textInput").value.toString());
    console.log(`Input text is : ${str}`);


    // The split(' ') method is used to split the strings into individual array elements.
    // The join('') method merges the array into a string.

    const newStr = str.split(' ').join("");
    console.log(newStr);


    // const newStr = wordsArr
    // console.log(newStr);


    document.querySelector('#h4').innerHTML = `Result : ${newStr}`;
}