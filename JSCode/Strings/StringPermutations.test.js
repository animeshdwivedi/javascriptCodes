import { strMatchCheck } from './StringPermutations';

describe("String Permutation", () => {
    it("Should return false if strings length don't match", () => {
        expect(strMatchCheck("god", "dogs")).toBe(false);
    });
    it("Should return true if strings are permutations of each other", () => {
        expect(strMatchCheck("god", "dog")).toBe(true);
    });
    it("Should return true if strings are permutations of each other", () => {
        expect(strMatchCheck("abcdef", "fdcbae")).toBe(true);
    });
    it("Should return false if strings are not permutations of each other", () => {
        expect(strMatchCheck("god", "dogs")).toBe(false);
    });
});