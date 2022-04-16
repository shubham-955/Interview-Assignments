// Debounce in Javascript
const getData = () => {
    console.log("Fetching data..")
    // make an API req and get the data
}

const doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, delay);


    }
}

const getData2 = doSomeMagic(getData, 300)