module.exports = templateData => {
    const {title, description, contents, installation, usage, contribution, license, tests} = templateData;
    return `
    # <${title}>

    ## Description

    ${description}

    ## Table of Contents (Optional)

    ${contents}

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

    `;
};