import { helloWorld } from './HelloWorld';

describe('Hello World', () => {
  it('Should Print Hello World', () => {
    expect(helloWorld()).toBe('Hello World');
  });
});
