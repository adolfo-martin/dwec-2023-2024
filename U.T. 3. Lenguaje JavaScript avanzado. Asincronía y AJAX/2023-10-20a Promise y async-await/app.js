// fetch devuelve una promesa, then y catch

// Promise - JavaScript y en Java

// function getNumberSeven() {
//     return 7;
// }

// console.log(getNumberSeven);
// console.log(getNumberSeven());


// function getNumberSevenAsPromise() {
//     const promise = new Promise(function (resolve, reject) {
//         if (true) {
//             resolve(7);
//         } else {
//             reject('There is a problem');
//         }
//     });

//     return promise;
// }

// function getNumberSevenAsPromise() {
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             //calculo largo
//             if (true) {
//                 resolve(7);
//             } else {
//                 reject('There is a problem');
//             }
//         }, 5000);
//     });

//     return promise;
// }

// getNumberSevenAsPromise()
//     .then(resultado => console.log(resultado))
//     .catch(error => console.error(error));



// sugar syntax
// async-await JavaScript, Python, C#


function getNumberSevenAsPromise() {
    const promise = new Promise(function (resolve, reject) {
        if (true)
            resolve(7);
        else
            reject('There is a problem');
    });

    return promise;
}

async function getNumberAsAsync() {
    if (false)
        return 7;
    else
        throw new Error('There is a problem');
}


// getNumberAsAsync()
//     .then(console.log)
//     .catch(error => console.error(error.message));

try {
    const number = await getNumberAsAsync();
    console.log(number);
} catch (error) {
    console.error(error.message);
}

console.log('🏁');