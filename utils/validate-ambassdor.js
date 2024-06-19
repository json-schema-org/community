const fs = require('fs');
const path = require('path');

// Load schema and data files using __dirname
const schemaPath = path.join(__dirname, '.', 'programs', 'ambassadors', 'ambassadors-schema.json');
const dataPath = path.join(__dirname, '.', 'programs', 'ambassadors', 'ambassadors.json');
const schema = require(schemaPath);
const data = require(dataPath);

// Validate function
function validate(schema, data) {
    // Check if data is an array
    if (!Array.isArray(data)) {
        console.error('Validation error: ambassadors.json should be an array.');
        return false;
    }

    // Validate each ambassador object in the array
    for (let ambassador of data) {
        // Validate required properties
        const requiredProperties = [
            'name', 'img', 'bio', 'title', 'github', 'twitter', 'linkedin', 'company', 'country', 'contributions'
        ];
        for (let prop of requiredProperties) {
            if (!(prop in ambassador)) {
                console.error(`Validation error: ${prop} is required.`);
                return false;
            }
        }

        // Validate img format (URI)
        if (!isValidURI(ambassador.img)) {
            console.error(`Validation error: img (${ambassador.img}) is not a valid URI.`);
            return false;
        }

        // Validate contributions array
        if (!Array.isArray(ambassador.contributions)) {
            console.error('Validation error: contributions should be an array.');
            return false;
        }
        for (let contribution of ambassador.contributions) {
            const requiredContributionProperties = ['type', 'title', 'date', 'link'];
            for (let prop of requiredContributionProperties) {
                if (!(prop in contribution)) {
                    console.error(`Validation error: ${prop} is required in contributions.`);
                    return false;
                }
            }
            // Validate contribution type
            if (!['article', 'talk', 'video', 'other'].includes(contribution.type)) {
                console.error(`Validation error: Invalid contribution type (${contribution.type}).`);
                return false;
            }
            // Validate date
            if (!isValidMonth(contribution.date.month)) {
                console.error(`Validation error: Invalid month (${contribution.date.month}).`);
                return false;
            }
            if (!isValidYear(contribution.date.year)) {
                console.error(`Validation error: Invalid year (${contribution.date.year}).`);
                return false;
            }
            // Validate link format (URI)
            if (!isValidURI(contribution.link)) {
                console.error(`Validation error: link (${contribution.link}) is not a valid URI.`);
                return false;
            }
        }
    }

    // If no validation errors, return true
    return true;
}

// Function to validate if a string is a valid URI
function isValidURI(uri) {
    try {
        new URL(uri);
        return true;
    } catch (error) {
        return false;
    }
}

// Function to validate if a month string is valid
function isValidMonth(month) {
    const validMonths = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return validMonths.includes(month);
}

// Function to validate if a year integer is within range
function isValidYear(year) {
    return Number.isInteger(year) && year >= 1900 && year <= 2100;
}

// Perform validation
if (validate(schema, data)) {
    console.log('ambassadors.json is valid.');
} else {
    console.error('Validation failed.');
}
