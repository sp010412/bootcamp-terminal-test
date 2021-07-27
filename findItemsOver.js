module.exports = function findItemsOver(list1, list2) {
    // console.log(list2)
    var results2 = [];
    for (var i = 0; i < list1.length; i++) {
        if (list1[i].qty > list2) {
            results2.push(list1[i]);
            //console.log(results)
        }
    }
    return results2
}