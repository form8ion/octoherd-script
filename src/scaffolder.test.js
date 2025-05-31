import {promises as fs} from 'node:fs';

import {describe, it, expect, vi} from 'vitest';
import any from '@travi/any';

import scaffold from './scaffolder.js';

vi.mock('node:fs');

describe('scaffolder', () => {
  it('should scaffold the script', async () => {
    const projectRoot = any.string();

    const {tags} = await scaffold({projectRoot});

    expect(fs.writeFile).toHaveBeenCalledWith(
      `${projectRoot}/index.js`,
      'export async function script(octokit, repository) {}'
    );
    expect(tags).toEqual(['octoherd-script']);
  });
});
