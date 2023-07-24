function isValidBase(base) {
    const validBases = /^[ATCG]+$/;
    return validBases.test(base);
}

function calculateMutations(adn) {

    let mutations = 0;
    const matrix = adn.map(row => row.split(''));

    // Verificar en dirección horizontal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 3; j++) {
            const base = matrix[i][j];
            if (isValidBase(base) &&
                matrix[i][j + 1] === base &&
                matrix[i][j + 2] === base &&
                matrix[i][j + 3] === base) {
                mutations += 1;
            }
        }
    }

    // Verificar en dirección vertical
    for (let i = 0; i < matrix.length - 3; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const base = matrix[i][j];
            if (isValidBase(base) &&
                matrix[i + 1][j] === base &&
                matrix[i + 2][j] === base &&
                matrix[i + 3][j] === base) {
                mutations += 1;
            }
        }
    }

    // Verificar en dirección diagonal derecha
    for (let i = 0; i < matrix.length - 3; i++) {
        for (let j = 0; j < matrix[i].length - 3; j++) {
            const base = matrix[i][j];
            if (isValidBase(base) &&
                matrix[i + 1][j + 1] === base &&
                matrix[i + 2][j + 2] === base &&
                matrix[i + 3][j + 3] === base) {
                mutations += 1;
            }
        }
    }

    // Verificar en dirección diagonal izquierda
    for (let i = 0; i < matrix.length - 3; i++) {
        for (let j = 3; j < matrix[i].length; j++) {
            const base = matrix[i][j];
            if (isValidBase(base) &&
                matrix[i + 1][j - 1] === base &&
                matrix[i + 2][j - 2] === base &&
                matrix[i + 3][j - 3] === base) {
                mutations += 1;
            }
        }
    }
    return mutations;
}

function hasMutation(req, res) {
    if (calculateMutations(req.body.dna) > 1) {
        res.status(200).send({
            code: 200,
            message: 'OK',
        });
    } else {
        res.status(403).send({
            code: 403,
            message: 'Forbidden',
        });
    }
}

module.exports = {
    hasMutation
};
