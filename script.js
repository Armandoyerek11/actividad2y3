function changeColor(event) {
    document.getElementById("main").style.backgroundColor = event.value;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9.10];


const items = [
    { coca: 15 },
    { pesi: 12 },
    { seven: 14 },
    { coca: 15 },
    { seven: 14 },
    { seven: 14 },
    { pesi: 12 },
    { seven: 14 },
];

const grouped = items.reduce((acc, item) => {
    for (let prop in item) {
        if (acc.hasOwnProperty(prop)) acc[prop] += item[prop];
        else acc[prop] = item[prop];
    }
    return acc;
}, {});
console.log(grouped);

const numbersPlusTen = numbers.map((number) => number + 10);

const greaterThanFive = numbers.filter((number) => number > 5);

const numberFive = numbers.find((number) => number === 5);

const indexOfFive = numbers.findIndex((number) => number === 5);

//console.log(numbersPlusTen);//
//console.log(greaterThanFive);//
//console.log(numberFive);//

const promisedFuntion = () => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            setTimeout(() => {
                resolve(`Succes number:${number}`);
            }, 1000);
        } else {
            reject(`error el numero :${number} es menor a 10`);
        }
    });
};

promisedFuntion(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(err);
    })
    .finally(() => {
        console.log("finally");
    });