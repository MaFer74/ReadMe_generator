// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}
`;
}

module.exports = generateMarkdown;
