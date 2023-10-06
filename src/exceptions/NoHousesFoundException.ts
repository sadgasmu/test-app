import {ApolloError} from "apollo-server-core";

export default class NoHousesFoundException extends ApolloError {
    constructor() {
        super('No houses found', 'no_houses_found', { code: 'not_found' });
    }
}