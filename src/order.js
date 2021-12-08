// Custom sort alphabet
const alphabet = [
    'A', 'B', 'G', 'D', 'H', 'V', 'Z', 'J', 'T', 'Y', 'K', 'L', 'M',
    'N', 'S', 'I', 'P', 'X', 'Q', 'R', 'W', 'U', 'C', 'E', 'F', 'O'
]

export default function (str) {

    // Break sentence by words
    const words =  str.toLowerCase().split(" ");

    // Inline compare function
    words.sort(function(firstEl, secondEl) {
        // Are the strings equal?
        if(firstEl === secondEl) return 0;

        // If they are not equal, compare the first letters
        // against the custom sort alphabet
        const indexOfFirstEl = alphabet.map(v => v.toLowerCase()).indexOf(firstEl[0]);
        const firstElInList = indexOfFirstEl >= 0;

        const indexOfSecondEl = alphabet.map(v => v.toLowerCase()).indexOf(secondEl[0]);
        const secondElInList = indexOfSecondEl >= 0;

        // If the first letter of neither string is in the list,
        // compare alphabetically
        if(!firstElInList && !secondElInList) {
            return firstEl.localeCompare(secondEl);
        } else if(!firstElInList) {
            // the first letter of only firstEl is not in the list
            return 1;
        } else if(!secondElInList) {
            // the first letter of only secondEl is not in the list
            return -1;
        } else if(indexOfFirstEl === indexOfSecondEl) {
            // the first letter of firstEl and secondEl are both in the list
            // and they are the same
            return firstEl.localeCompare(secondEl);
        } else {
            // the first letters are different; sort by first letter
            return indexOfFirstEl - indexOfSecondEl;
        }
    })

    return words.join(" ");
}
