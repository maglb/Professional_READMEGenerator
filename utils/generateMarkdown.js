// TODO: Create a function that returns a license badge based on which license is passed in
let badge = '';
let link = '';

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
      break;
    case 'IBM':
      return badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
      break;
    case 'MIT':
      return badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      break;
    case 'Mozilla':
      return badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
      break;
    case 'Unlicense':
      return badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
      break;
    case 'None':
      return badge = ''
      break;
  }
};

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'Apache':
        return link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'IBM':
        return link = 'https://opensource.org/licenses/IPL-1.0'
        break;
      case 'MIT':
        return link = 'https://opensource.org/licenses/MIT'
        break;
      case 'Mozilla':
        return link = 'https://opensource.org/licenses/MPL-2.0'
        break;
      case 'Unlicense':
        return link = 'http://unlicense.org/'
        break;
      case 'None':
        return link = ''
        break;
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  return `## License
${badge}
${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
 const renderLicense = renderLicenseSection(license);
  return `# ${data.title}

## Description

${data.motivation}
${data.learning}

## Table of Contents 🗒

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [Contributors](#contributors)

  ${renderLicenseLink(data.license)}

## Installation

${data.steps}

## Usage

${data.instructions}

${renderLicense}

## Contributors

${data.contributors}

## Tests

  To run tests, run the following commands:

  ${data.test}

## Contact

If you have any questions about the project, please do not hesitate to contact me at ${
    data.email
  } or via Github https://github.com/${data.github}`;
}

module.exports = generateMarkdown;
