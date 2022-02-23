/* function calculateSquareArea() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const squareArea = 5 * 5;
            resolve(squareArea);
        }, 500);
    });
}

function onFulFilled(data) {
    console.log('onFulFilled', data);
}
function onReject(reason) {
    console.log('onReject', reason);
}

calculateSquareArea()
    .then(onFulFilled)
    .catch((reason) => {
        console.log('catch', reason);
    }); */

/* const myPromises = [
    new Promise((resolve, reject) => setTimeout(() => reject(100), 500)),
    new Promise((resolve, reject) => setTimeout(() => resolve(200), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(300), 1500)),
];

function onFulFilled(data) {
    console.log('onFulFilled', data);
}

//Promise.all(myPromises)
//Promise.allSettled(myPromises)
//Promise.any(myPromises)
Promise.race(myPromises)
    .then(onFulFilled)
    .catch((reason) => {
        console.log('catch', reason);
    }); */

let myNumber = 5;

changeNumber = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            myNumber = 10;
            resolve(myNumber);
        }, 500);
    });
};

startChange = async () => {
    await changeNumber();
    console.log(myNumber);
};

startChange();
