
const R = require("ramda");

const input = [
    {
        party: 1,
        test: [ { id: 1 }, { id: 2 } ]
    },
    {
        party: 2,
        test: [ { id: 1 }, { id: 2 }, { id: 3 } ]
    }
];

const expectedOutput = [
    {
        party: 1,
        id: 1
    },
    {
        party: 1,
        id: 2
    },
    {
        party: 2,
        id: 1
    },
    {
        party: 2,
        id: 2
    },
    {
        party: 2,
        id: 3
    }
];


const setParty = R.set(R.lensProp("party"));

const getTestWithParty = ({test, party}) => R.map(setParty(party), test);

const getOutput = R.compose(R.flatten, R.map(getTestWithParty));


const output = getOutput(input);

// console.log(expectedOutput)
console.log(output);

console.log(R.equals(output, expectedOutput));