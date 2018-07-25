const _ = require("lodash");


// function convertFieldNames(data) {

//     return _.reduce(data, (result, value, key) => {
//         console.log("val", value)
//         if (_.isObject(value)) {

//             value = convertFieldNames(value);

//         }
//         console.log(key)
//         result[_.snakeCase(key)] = value;

//         return result;

//     }, {});

// }

// let testData = {
//     mockField: "mockValue",
//     nestedField: {
//         nestedNestedField: "mockValue"
//     }
// };

// console.log(convertFieldNames(testData));

function recursiveFlatten(message) {

    return _.reduce(message, (flatObject, value, key) => {

        if (_.isPlainObject(value)) {

            _.forEach(recursiveFlatten(value), (nestedValue, nestedKey) => {

                flatObject[key + "_" + nestedKey] = nestedValue;

            });

            return flatObject;

        }

        flatObject[key] = value;
        
        return flatObject;

    }, {});

}

nestedObject = {
    field1: "value1",
    field2: {
        field22: "value22",
        field23: "value23",
        field24: ["a", "b", "c"]
    },
    field3: [1, 2, 3]
};

// let categories = [
//     { id: "animals", parent: null },
//     { id: "mammals", parent: "animals" },
//     { id: "cats", parent: "mammals" },
//     { id: "dogs", parent: "mammals" },
//     { id: "chihuahua", parent: "dogs" },
//     { id: "labrador", parent: "dogs" },
//     { id: "persian", parent: "cats" },
//     { id: "siamese", parent: "cats" }
// ];

// function makeTree(categories) {

//     return makeTreeRec(categories, null);

// }

// function makeTreeRec(categories, parent) {

//     let tree = {};

//     categories
//         .filter((category) => category.parent === parent)
//         .forEach((category) => {

//             tree[category.id] = makeTreeRec(categories, category.id)
//         });

//     return _.isEmpty(tree) ?  null : tree;

// }

// console.log(JSON.stringify(makeTree(categories), null, 4));

// /*{
//     animals: {
//         mammals: {
//             dogs: {
//                 chihuahua: null,
//                 labrador: null
//             },
//             cats: {
//                 persian: null,
//                 siamese: null
//             }
//         }
//     }
// }
// */