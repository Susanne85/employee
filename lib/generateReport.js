
const prettier = require("../node_modules/prettier");
const generateReportTeam = require("./generateReportTeam");

function generateReport (employees) {

    const formattedgeneratedReportHTML = prettier.format(
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <link rel="stylesheet" type="text/css" href="../src/css/style.css">
        <title>My Teams Report</title>
    </head>
    <header class="content is-medium has-text-centered has-background-primary">
        <h1>My Team</h1>
    </header>
    <body>
        ${generateReportTeam(employees)}
        <script src="assets/script/report.js"></script>
    </body>
</html>`,{ parser: "html" }
  );
   
  return formattedgeneratedReportHTML;

}

module.exports = generateReport;