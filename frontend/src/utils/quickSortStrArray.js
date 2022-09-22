export default function quickSort(array, key) {
    for (var i = 0; i < array.length; i++) {
        var currVal = array[i][key]; var currElem = array[i]; var j = i - 1; while ((j >= 0) && (array[j][key] > currVal)) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currElem;
    }
    console.log(`Sorted array ${array}`)
    return array;

}