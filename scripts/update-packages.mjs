import { execSync } from 'node:child_process';

import json from '../package.json' with { type: 'json' };

const { devDependencies = {}, dependencies = {} } = json;

const allDependencies = { ...devDependencies, ...dependencies };

const depNames = Object.keys(allDependencies);



depNames.forEach((dep) => {
    console.log("DB ... 🚀 ~ update-packages.mjs:13 ~ depNames.forEach ~ dep ~~~", dep)
    execSync(`npm i ${dep}@latest`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error updating ${dep}:`, error);
      return;
    }
    if (stderr) {
      console.error(`Error output for ${dep}:`, stderr);
      return;
    }
    console.log(`Updated ${dep} to latest version:\n`, stdout);
  });
});
