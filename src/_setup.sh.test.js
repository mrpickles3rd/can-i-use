const fs = require('node:fs');

describe('Have you run `npm run setup` ????', () => {
  it('Should have setup the app (have a git hook file `.git/hooks/pre-commit`', () => {
    let error;
    fs.access('.git/hooks/pre-commit', (err) => { error = err });
    expect(error).toBeUndefined();
  });

  it('Should have the correct version of Node.js (.nvmrc)', () => {
    let error;
    const val = fs.readFileSync('.nvmrc', 'utf8', (err) => {
      error = err;
    });

    expect(error).toBeUndefined();
    expect(val).toBeDefined();

    expect(process.version.trim()).toBe(val.trim());
  });
});
