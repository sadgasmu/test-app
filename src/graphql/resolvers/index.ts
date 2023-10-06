import path from "path";
import scalars from "./scalars";
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const resolversArray = loadFilesSync(path.join(__dirname), {recursive: true});

export default mergeResolvers([...resolversArray, scalars]);