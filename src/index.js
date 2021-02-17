// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix == undefined || matrix.length == 0) {
        return [];
    }
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].reverse();
    }
    for (let subArr of matrix) {
        for (let elem of subArr) {
            result.push(elem);
        }
    }
    console.log(result);
    return result;
};
