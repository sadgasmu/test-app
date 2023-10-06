import {ApolloError} from "apollo-server-core";

export default class NoHousesFoundException extends ApolloError {
    constructor(props) {
        super('No houses found', 'NoHousesFound');
    }

}