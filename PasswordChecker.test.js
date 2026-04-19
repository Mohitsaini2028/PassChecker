import { checkPassword } from './PasswordChecker.js';

describe('checkPassword', () => {
    
    // Valid password tests
    describe('Valid Passwords', () => {
        test('should accept password with all requirements met', () => {
            expect(() => checkPassword('Password123!')).not.toThrow();
        });

        test('should accept password with uppercase, lowercase, number, and special character', () => {
            expect(() => checkPassword('Test@Pass1')).not.toThrow();
        });

        test('should accept password at minimum length (8 characters)', () => {
            expect(() => checkPassword('Pass@123')).not.toThrow();
        });

        test('should accept password at maximum length minus 1 (19 characters)', () => {
            expect(() => checkPassword('Pass@Pass@Pass@123')).not.toThrow();
        });
    });

    // Invalid input type tests
    describe('Type Validation', () => {
        test('should throw error if password is not a string (number)', () => {
            expect(() => checkPassword(123456)).toThrow('Password must be a string');
        });

        test('should throw error if password is not a string (null)', () => {
            expect(() => checkPassword(null)).toThrow('Password must be a string');
        });

        test('should throw error if password is not a string (undefined)', () => {
            expect(() => checkPassword(undefined)).toThrow('Password must be a string');
        });

        test('should throw error if password is not a string (object)', () => {
            expect(() => checkPassword({})).toThrow('Password must be a string');
        });
    });

    // Length validation tests
    describe('Length Validation', () => {
        test('should throw error if password is less than 8 characters', () => {
            expect(() => checkPassword('Pass@12')).toThrow('Password must be at least 8 characters long');
        });

        test('should throw error if password is 7 characters', () => {
            expect(() => checkPassword('Pass@1')).toThrow('Password must be at least 8 characters long');
        });

        test('should throw error if password is 20 or more characters', () => {
            expect(() => checkPassword('Pass@12345Pass@12345')).toThrow('Password must be less than 20 characters long');
        });

        test('should throw error if password is 21 characters', () => {
            expect(() => checkPassword('Pass@12345Pass@123456')).toThrow('Password must be less than 20 characters long');
        });
    });

    // Uppercase letter tests
    describe('Uppercase Letter Validation', () => {
        test('should throw error if password has no uppercase letter', () => {
            expect(() => checkPassword('password123!')).toThrow('Password must contain at least one uppercase letter');
        });

        test('should accept password with at least one uppercase letter', () => {
            expect(() => checkPassword('Password123!')).not.toThrow();
        });

        test('should accept password with multiple uppercase letters', () => {
            expect(() => checkPassword('PassWord123!')).not.toThrow();
        });
    });

    // Lowercase letter tests
    describe('Lowercase Letter Validation', () => {
        test('should throw error if password has no lowercase letter', () => {
            expect(() => checkPassword('PASSWORD123!')).toThrow('Password must contain at least one lowercase letter');
        });

        test('should accept password with at least one lowercase letter', () => {
            expect(() => checkPassword('Password123!')).not.toThrow();
        });

        test('should accept password with multiple lowercase letters', () => {
            expect(() => checkPassword('PaSSwoRd123!')).not.toThrow();
        });
    });

    // Numeric digit tests
    describe('Numeric Digit Validation', () => {
        test('should throw error if password has no numeric digit', () => {
            expect(() => checkPassword('Password!')).toThrow('Password must contain at least one number');
        });

        test('should accept password with at least one numeric digit', () => {
            expect(() => checkPassword('Password1!')).not.toThrow();
        });