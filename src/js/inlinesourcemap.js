/* in order to use async, babelrc configuration is needed */
/*
const timerFn = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([1,2,3,4,5,6,7,8,9]);
    }, 2000);
});

async function asyncFn() {
    const timerVal = await timerFn;
    console.log(timerVal);
}
*/

function inlinesourcemapFn() {
    console.log('Hello from inlinesourcemap.js!!!!!');
}

export {inlinesourcemapFn};