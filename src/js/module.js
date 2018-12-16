const hello = () => {
    console.log('Hello from module.js!!!!!');
};

const arr = () => {
    console.log(Array.from([1, 2, 3], x => x + x));
};

export {hello, arr};