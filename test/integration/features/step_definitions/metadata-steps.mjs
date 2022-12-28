import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

Then('project metadata is generated', async function () {
  const {tags} = this.result;

  assert.deepEqual(tags, ['octoherd-script']);
});
