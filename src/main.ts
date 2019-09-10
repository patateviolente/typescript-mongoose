require('source-map-support').install();

function helloWorld() {
  console.log(`-- This is a dumb program
npm run test            will compile ts and run tests');
npm run coverage-html   will output coverage

And now this program will throw and dump in the Typescript file`);

  try {
    throw new Error('I\'m here, and not in the dist!');
  } catch (e) {
    console.log(e.stack);
  }
}

helloWorld();
