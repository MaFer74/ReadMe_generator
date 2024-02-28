// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Static Badge](https://img.shields.io/badge/license-${data.license}-blue)


## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribuitions](#contribuitions)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${data.installations}

## Usage
${data.usage}

## License
${data.license}

## Contribuitions
${data.contribuition}

## Tests
${data.tests}

## Questions
If you want to visit my repository, please find me in https://github.com/${data.questions_github}
If you have any questions please contact me via ${data.questions_email}








`;
}

module.exports = generateMarkdown;
