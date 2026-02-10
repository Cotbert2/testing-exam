//Mateo Garcia
const toCelsius = (f) => {
    if (!isFinite(f)) throw new TypeError('f must be finite');
    return ((f - 32) * (5/9)).toFixed(1);
};

const toFahrenheit= (c) => {
    if (!isFinite(c)) throw new TypeError('c must be finite');
    return (c * (9/5) + 32).toFixed(1);
};

const movingAverage = (series,window) => {
    if (!Array.isArray(series) || !Number.isInteger(window)) throw new TypeError('type error');

    series.map(e => {
        if (isNaN(e)) throw new TypeError('series must be a number array');
    });

    if (window < 2 || window > series.length) throw new RangeError('window out of range');

    let response = [];

    for (let i = 0 ; i <= window; i ++) {
        let currentAvarage = 0;
        for (let j = 0; j < window ; j++){
            currentAvarage += series[i + j];
        }
        if (!isNaN(currentAvarage)) response.push((currentAvarage/window).toFixed(2));
        currentAvarage = 0;
    }
    return response;
};



module.exports = {
    toCelsius,
    toFahrenheit,
    movingAverage
};