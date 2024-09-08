// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// Test for fromDollarToYen
test("3.5 dollars should be 512.295 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 USD es igual a 156.5 JPY / 1.07
    const expected = 3.5 * (156.5/1.07);

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.9158879);
})

// Test for fromYenToPound
test("3.5 yen should be 0.0196 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 JPY es igual a 0.87 GBP / 156.5
    const expected = 3.5 * (0.87/156.5);

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBeCloseTo(0.01945686901);
})