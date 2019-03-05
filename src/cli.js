import { stdin } from 'process';
import cookiejar2json from './main';

stdin.resume();
stdin.setEncoding('utf8');

const chunks = [];

stdin.on('data', data => chunks.push(data));

stdin.on('end', () => {
  const input = chunks.join();
  const output = cookiejar2json(input);
  console.log(JSON.stringify(output));
});
