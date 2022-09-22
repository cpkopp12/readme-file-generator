// Generate Template for question section from user data
var generateQuestionSection = function(questionSec) {
    
    const {email, githubLink, instructions} = questionSec;
    var questionsTemplate = ``;
    if (email != ''){
        questionsTemplate += `
Email: ${email}
`;
    }
    if (githubLink != ''){
        questionsTemplate += `
GitHub Link: [${githubLink}](#${githubLink})
`;
    }
    if (instructions != ''){
        questionsTemplate += `
Contact Instructions: ${instructions}`;
    }



    return questionsTemplate;
}

//Generate the license badge from the user data (list input)
var generateLicenseBadge = function(license) {
    license = license.replaceAll(' ','');
    license = license.replaceAll('.','');
    var badgeLink = '';
    var licenseBadges = {
        none: '',
        MITLicense: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        GNUAGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        GNULGPLv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        MozillaPublicLicense20: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        ApacheLicense20: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    for (const [key,value] of Object.entries(licenseBadges)){
        if (license == key) {
            badgeLink = value;
        }
    }

    return badgeLink;
}

//Generate Table of Contents from the user input
var generateTableOfContents = function(templateData) {
    var tOCArrayKeys = Object.keys(templateData);
    var tOCArrayValues = Object.values(templateData);
    //need to stop loop at email, goes under questions
    console.log(tOCArrayKeys);
    tOCArrayKeys = tOCArrayKeys.slice(0,tOCArrayKeys.findIndex(i => i == 'email'));
    console.log(tOCArrayKeys);
    var tOC = ``;
    tOCArrayKeys.forEach((item,index) => {
        if (index != 0 && tOCArrayValues[index] != '') {
            tOC += `
- [${item}](#${item})
`;
        }
    });
    tOC += `
- [Questions](#questions)
`;
    return tOC;
};


module.exports = templateData => {
    const {title, description, installation, usage, contribution, license, tests, ...questionSec} = templateData;
    return `
# ${title}        ${generateLicenseBadge(license)}

## Description

${description}

## Table of Contents (Optional)

${generateTableOfContents(templateData)}

## Installation
 
${installation}

## Usage

${usage}
    

## Credits

${contribution}


## License

${license}


## Tests

${tests}

## Questions

${generateQuestionSection(questionSec)}

    `;
};