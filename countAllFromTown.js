module.exports = function countAllFromTown(str1, str2) {

    var array1 = str1.split(",");
    console.log(array1);
    var array2 = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i].trim().startsWith(str2)) {
            array2.push(array1[i].trim());
        }
    }
    return array2.length;
}