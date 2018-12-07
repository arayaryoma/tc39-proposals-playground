// const test = (param) => {
//     if (param === undefined) throw new Error('required!');
//     if (typeof param !== 'string') throw new Error('argument must be string');
//     console.log(param);
// };

const test = (param = throw new Error('required')) => {
    typeof param === 'string' ? console.log(param) : throw new Error('argument must be string');
}

try {
    test();
} catch (e) {
    console.log(e.toString());
}

try {
    test(0);
} catch (e) {
    console.log(e.toString());
}

try {
    test('hello');
} catch (e) {
    console.log(e.toString());
}

