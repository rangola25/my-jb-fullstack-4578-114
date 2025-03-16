import { v4 } from "uuid";
import { hashPassword } from "./controller";

describe('hashPassword tests', () => {
    test('generates password that is valid sha256 output', () => {
        const result = hashPassword(v4())
        expect(result).toBeDefined()
        expect(result.length).toBe(64)
    })
    test('generates the same hashed password for identical input', () => {
        const input = v4()
        const hash1 = hashPassword(input)
        const hash2 = hashPassword(input)
        expect(hash1).toEqual(hash2)
    })
})