import {promises as fs} from 'fs';

import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('the script file is bootstrapped', async function () {
  const scriptContent = await fs.readFile(`${this.projectRoot}/script.js`, 'utf-8');

  assert.equal(scriptContent, `export async function script(octokit, repository) {}`);
});
