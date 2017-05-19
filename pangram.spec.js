// there's a lot of redundant naming, so lets get to the root of what we want
let pangram = require('./pangram').pangram;
const S_MSG = require('./pangram').SUCCESS_MSG;

describe('pangram', () => {
    it('should pass the test in the example documentation', () => {
        expect(pangram('abcdefghijklmnopqrstuvwXYZ')).toBe(S_MSG);
        expect(pangram('123abcdefghijklm NOPQRSTUVWXYZ321')).toBe(S_MSG);
        expect(pangram()).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    it('doesn\'t fail with non-string input', () => {
        expect(pangram(1)).toBe('abcdefghijklmnopqrstuvwxyz');
        expect(pangram(null)).toBe('abcdefghijklmnopqrstuvwxyz');
        expect(pangram({foo: 1, bar: ()=>{return undefined;}})).toBe('abcdefghijklmnopqrstuvwxyz');
        expect(pangram(() => {return 1+1;})).toBe('abcdefghijklmnopqrstuvwxyz');
        expect(pangram(['foo', 'bar'])).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    it('has no trouble with duplicate characters', () => {
        expect(pangram('hello world')).toBe('abcfgijkmnpqstuvxyz');
    });

    it('should validate the most well-known pangram', () => {
        expect(pangram('The quick brown fox jumps over the lazy dog.')).toBe(S_MSG);
    });

    it('should tolorate non-ASCII characters', () => {
        // 'Ç é a z'
        expect(pangram('\u00C7 \u00E9 a z')).toBe('bcdefghijklmnopqrstuvwxy');
        // bell character
        expect(pangram('\u0007 hello')).toBe('abcdfgijkmnpqrstuvwxyz');
    });
});
