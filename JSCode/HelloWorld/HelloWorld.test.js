import { helloWorldES6, helloWorld } from './HelloWorld';

describe('Hello World', () => {
  it('Should Print Hello World for ES5 function', () => {
    expect(helloWorld()).toBe('Hello World');
  });
  it('Should Print Hello World for ES6 function', () => {
    expect(helloWorldES6('Hello World')).toEqual('Hello World');
  });
});
