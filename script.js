//Question 1 - Write a JavaScript function that reverse a number.

let reversedNum = num => {
        return (
                num.toString().split('').reverse().join('')
        )
}
console.log(reversedNum(34223))


//Question 2 - Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

let upperCase = str => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        return splitStr.join(' ');
}

console.log(upperCase("the quick brown fox"));

//Question 3 - Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
let vowels = str => {
        let arr_vowel_list = 'aeiouAEIOU'.split('');
        let count = 0;
        str.split('').forEach(function (e) {
                if (arr_vowel_list.indexOf(e) !== -1) {
                        count++;
                }
        });
        console.log(count);

}

vowels("The quick brown fox");



//Question 4 - Write a JavaScript function that generates all combinations of a string.
let combinator = s => {
        list_of_strings = new Array();
        for (i = 0; i < s.length; i++) {
                for (j = i + 1; j < s.length + 1; j++) {
                        list_of_strings.push(s.slice(i, j));
                }
        }
        for (let i = 0; i < list_of_strings.length; i++) {
                console.log(`${list_of_strings[i]},`)
        }
        return list_of_strings;
}

console.log(combinator("dog"));