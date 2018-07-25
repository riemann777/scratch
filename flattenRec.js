var _ = require("lodash");

var data = {
    fieldOne: {
        fieldOneOne: "valueOne",
        fieldOneTwo: {
            fieldOneTwoOne: "valueTwo"
        },
    },
    fieldTwo: "valueThree"
};

console.log(flattenRec(data));

function flattenRec(data) {
    
    return _.reduce(data, (flatObject, value, key) => {

        if (_.isPlainObject(value)) {

            _.each(flattenRec(value), (nestedValue, nestedKey) => {

                flatObject[key + "_" + nestedKey] = nestedValue;
            });

            return flatObject;
        
        }

        flatObject[key] = value;

        return flatObject;

    }, {});

}