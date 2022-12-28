import {promises as fs} from 'fs';

import any from '@travi/any';
import sinon from 'sinon';
import {assert} from 'chai';

import scaffold from './scaffolder';

suite('scaffold script', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'writeFile');
  });

  teardown(() => sandbox.restore());

  test('that the script is scaffolded', async () => {
    const projectRoot = any.string();

    const {tags} = await scaffold({projectRoot});

    assert.calledWith(fs.writeFile, `${projectRoot}/index.js`, 'export async function script(octokit, repository) {}');
    assert.deepEqual(tags, ['octoherd-script']);
  });
});
