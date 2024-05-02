 function firstWord(s) {
    // Step 1: Trim the string to remove leading and trailing whitespace
    s = s.trim();

    // Step 2: Find the index of the first space
    const spaceIndex = s.indexOf(' ');

    // Step 3: Check if there is a space in the string
    if (spaceIndex === -1) {
        // If no space is found, return the entire string
        return s;
    } else {
        // If a space is found, return the substring from the start to the first space
        return s.substring(0, spaceIndex);
    }
}

// Test cases
console.log(firstWord('see and stop')); // Outputs: 'see'
console.log(firstWord(' Hello World!')); // Outputs: 'Hello'
console.log(firstWord('12345')); // Outputs: '12345'
console.log(firstWord('')); // Outputs: ''

 
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
