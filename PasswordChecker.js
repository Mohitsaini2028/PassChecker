
/**
 * Validates a password against security requirements
 * @param {string} password - The password to validate
 * @throws {Error} If password does not meet any of the validation criteria
 * @returns {void}
 */
export function checkPassword(password)
{
    if(typeof password !== "string"){
        throw new Error('Password must be a string');   
    }
    
    // Validate minimum length requirement (at least 8 characters)
    if(password.length < 8){
        throw new Error('Password must be at least 8 characters long');   
    }
    
    // Validate maximum length requirement (less than 20 characters)
    if(password.length >= 20){
        throw new Error('Password must be less than 20 characters long');   
    }
    
    // Check for at least one uppercase letter (A-Z)
    if(!/[A-Z]/.test(password)){
        throw new Error('Password must contain at least one uppercase letter');   
    }
    
    // Check for at least one lowercase letter (a-z)
    if(!/[a-z]/.test(password)){
        throw new Error('Password must contain at least one lowercase letter');   
    }
    
    // Check for at least one numeric digit (0-9)
    if(!/[0-9]/.test(password)){
        throw new Error('Password must contain at least one number');   
    }
    
    // Check for at least one special character (non-alphanumeric)
    if(!/[^A-Za-z0-9]/.test(password)){
        throw new Error('Password must contain at least one special character');   
    }

}