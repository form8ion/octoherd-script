import {promises as fs} from 'fs';

export default function ({projectRoot}) {
  return fs.writeFile(`${projectRoot}/index.js`, 'export async function script(octokit, repository) {}');
}
