import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import path from "path";


const resolversArray = loadFilesSync(path.join(__dirname), {recursive: true});

export default mergeResolvers(resolversArray);

// import { join } from 'path';
//
// const collectResolvers = (dir: string): any => {
//     const resolvers: any = {};
//
//     readdirSync(dir).forEach((file) => {
//         const filePath = join(dir, file);
//         const isDirectory = statSync(filePath).isDirectory();
//
//         if (isDirectory) {
//             // If it's a directory, recursively collect resolvers from subdirectory
//             resolvers[file] = collectResolvers(filePath);
//         } else if (file.endsWith('.ts')) {
//             // Import and add the resolver module to the resolvers object
//             const module = require(filePath);
//             resolvers[file.replace('.ts', '')] = module.default || module;
//         }
//     });
//
//     return resolvers;
// };
//
// const allResolvers = collectResolvers(__dirname);
//
// console.log(allResolvers)
// export default allResolvers;
