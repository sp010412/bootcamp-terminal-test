module.exports = function countAllPaarl(regNo) {
    //console.log(regNo)
    var array1 = regNo.split(',');
    //console.log(array1)
    var array2 = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i].startsWith('CJ')) {
            array2.push(array1[i]);
        }
        console.log(array2[i])

    }
    return array2.length;
}