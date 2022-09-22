var generateTableOfContents = function(templateData) {
    //const {title, description, installation, usage, contribution, license, tests, email, githubLink} = templateData;
    //var tOCArray = [title,description,installation,usage,contribution,license,tests,email,githubLink];
    var tOCArrayKeys = Object.keys(templateData);
    var tOCArrayValues = Object.values(templateData);
    var tOC = ``;
    tOCArrayKeys.forEach((item,index) => {
        if (index != 0 && tOCArrayValues[index] != '') {
            tOC += `
            - [${index}: ${item}] (#${item})
            `;
        }
    });
    return tOC;
};


module.exports = templateData => {
    const {title, description, installation, usage, contribution, license, tests, email, githubLink} = templateData;
    return `
    # <${title}>

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

    ${email} 
    ${githubLink}

    `;
};