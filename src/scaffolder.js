import {promises as fs} from 'fs';

export default async function scaffold({projectRoot}) {
  await fs.writeFile(`${projectRoot}/index.js`, 'export async function script(octokit, repository) {}');

  return {tags: ['octoherd-script']};
}
