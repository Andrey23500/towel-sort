module.exports = function towelSort(matrix) {

    let arrOutput = [];

    if (!matrix || matrix.length === 0) {
        return arrOutput;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                arrOutput.push(matrix[i][j]);
            }
        }
        else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                arrOutput.push(matrix[i][j]);
            }
        }
    }

    return arrOutput;
}
