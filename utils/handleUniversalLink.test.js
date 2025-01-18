import { handleUniversalLink } from './handleUniversalLink';

describe('handleUniversalLink', () => {
  it('should return "my-deeplinking-app://test" when urlString includes "abcde"', () => {
    const input = 'my-deeplinking-app://abcde';
    const expectedOutput = 'my-deeplinking-app://test';
    expect(handleUniversalLink(input)).toBe(expectedOutput);
  });

  it('should return the original urlString if "abcde" is not included', () => {
    const input = 'my-deeplinking-app://explore/modal';
    const expectedOutput = 'my-deeplinking-app://explore/modal';
    expect(handleUniversalLink(input)).toBe(expectedOutput);
  });

  it('should return "+not-found" when an error occurs', () => {
    // Simulate an error scenario by passing an invalid argument
    const input= null;
    const expectedOutput = '+not-found';
    expect(handleUniversalLink(input)).toBe(expectedOutput);
  });
});
