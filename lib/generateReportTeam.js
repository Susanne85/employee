

const prettier = require("../node_modules/prettier");

function generateReportTeam () {

    const formattedgeneratedReportHTML = prettier.format(
`<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Teams Report</title>
    </head>
    <body>
    </body>
</html>`,
{ parser: "html" }
  );
    
  return formattedgeneratedReportHTML;

}

module.exports = generateReportTeam;