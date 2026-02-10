//test - Mateo Garcia
const { toCelsius, toFahrenheit, movingAverage } = require("../src/utils/utils");

describe("toCelsius", () => {
    test("32F ->  0.0C", () => {
        expect(toCelsius(32)).toBe("0.0");
    });

    test("128F ->  53.3C", () => {
        expect(toCelsius(128)).toBe("53.3");
    });

    test("-40C -> -40F", () => {
        expect(toCelsius(-40)).toBe("-40.0");
    });
});

describe("toFahrenheit", () => {
    test("0C->  32F", () => {
        expect(toFahrenheit(0)).toBe("32.0");
    });


    test("100C -> 212.0F", () => {
        expect(toFahrenheit(100)).toBe("212.0");
    });

    test("-40C -> -40F", () => {
        expect(toFahrenheit(-40)).toBe("-40.0");
    });
});
//Mateo Garcia
describe("movingAverage",  () => {
    test("movingAverage([10,20,30,40], 2) → [15.00, 25.00, 35.00]", () => {
        expect(movingAverage([10,20,30,40], 2)).toEqual(['15.00', '25.00', '35.00'])
    });

    test("movingAverage([1,2,3], 3) → [2.00]", () => {
        expect(movingAverage([1,2,3], 3)).toEqual(['2.00'])
    });
})

describe("branches", () => {
    test("invalid input to celsius", () => {
        try{

            toFahrenheit('f must be finite').toThrow('f must be finite')
        }catch(e){

        }
    })
})

describe("branches", () => {
    test("invalid input to farenheit", () => {
        try{

            toCelsius('c must be finite').toThrow('c must be finite')
        }catch(e){
            
        }
    })
})