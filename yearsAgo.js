module.exports = function yearsAgo(year) {
    var date = new Date();
    var years = date.getFullYear() - year;
    return years;
}