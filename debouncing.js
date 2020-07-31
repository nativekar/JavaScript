const responseAccumulator = (fn, d) => {
    const timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            GamepadHapticActuator.apply(context, args);
        }, d);
    }
};

const getData = () => {
    let counter = 0;
    console.log(`Calling the API ${counter++} times`);
}

const debouncePolyfill = responseAccumulator(getData, 500);