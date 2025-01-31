import { writeFile } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..'); // Move to the directory

// Load environment variables from .env
dotenv.config({ path: 'src/.env' });
// const requiredEnvVars = [
//     'WeatherAPIBaseUrl',
//     'XRapidAPIHostHeaderName',
//     'XRapidAPIHostHeaderValue',
//     'XRapidAPIKeyHeaderName',
//     'XRapidAPIKeyHeaderValue'
// ];

// const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);
// if (missingEnvVars.length > 0) {
//     console.error('\x1b[31mError: Missing required environment variables:\x1b[0m');
//     missingEnvVars.forEach(varName => {
//         console.error(`- ${varName}`);
//     });
//     process.exit(1);
// }
// Environment file content
const envFile = `export const environment = {
    WeatherAPIBaseUrl: '${process.env.WeatherAPIBaseUrl}',
    XRapidAPIHostHeaderName: '${process.env.XRapidAPIHostHeaderName}',
    XRapidAPIHostHeaderValue: '${process.env.XRapidAPIHostHeaderValue}',
    XRapidAPIKeyHeaderName: '${process.env.XRapidAPIKeyHeaderName}',
    XRapidAPIKeyHeaderValue: '${process.env.XRapidAPIKeyHeaderValue}',  
};
`;

// Define the target path
const targetPath = join(__dirname, './src/environments/environment.development.ts');

// Write the file
writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        const successColor = '\x1b[32m%s\x1b[0m';
        const checkSign = '\u{2705}';
        console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
        // console.log(process.env.XRapidAPIKeyHeaderValue);
    }
});
