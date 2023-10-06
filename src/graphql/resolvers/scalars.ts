import {GraphQLScalarType} from "graphql/type";

export default {
    NumericID: new GraphQLScalarType({
        name: 'NumericID',
        description: 'A custom scalar type to represent numeric IDs',

        parseValue(value) {
            return Number.parseInt(<string>value, 10);
        },

        serialize(value) {
            if (typeof value === 'number') {
                return value;
            }
            return null;
        },

        parseLiteral(ast) {
            if (ast.kind === 'IntValue') {
                return parseInt(ast.value, 10);
            }
            return null;
        },
    }),
};