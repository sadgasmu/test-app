import {ApolloError} from "apollo-server-core";

export default class HouseNotFoundException extends ApolloError {
    constructor() {
        super('House not found', 'house_not_found', {code: 'not_found'});
    }
}