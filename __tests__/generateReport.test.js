

const generateReportTeam = require("../lib/generateReportTeam.js");
const generateReport = require("../lib/generateReport.js")
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");
const Engineer = require("../lib/Engineer.js");
const prettier = require("../node_modules/prettier");

describe(`generate-report`, () => {
    it("generates an empty report when there are no team members", () => {
        expect(generateReport([])).toMatchSnapshot();
    });
});
describe("generate-report-team", () => {
    it("generates an empty string when given an empty list of team members", () => {
        const noMembers = [];
        const actualResults = generateReportTeam(noMembers);
        const expectedResults = ` `;
        expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
    it("generates an report for a single Manager", () => {
        const manager = new Manager('Susanne', '1234', 'xkqk2010@gmail.com', '123456');
        const employees = [];
        employees.push(manager);
        const actualResults = generateReport(employees);
        const expectedResults = `<!DOCTYPE html>
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
                <section class="columns is-6 card-columns is-full m-3">
                    <div class="card">
                        <div class="card-content px-0 pt-0">
                            <div class="box has-background-primary">
                                <h2>Susanne</h2>
                                <h2>Manager</h2>
                            </div>
                            <div class="content is-small">
                                <ul class="px-5 mx-3">
                                    <li>ID: 1234</li>
                                    <li>Email:</li><a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a>
                                    <li>Office ID: 123456</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="assets/script/report.js"></script>
            </body>
        </html> `;
        expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
    it("generates an report for a single Intern", () => {
        const intern = new Intern('Susanne', '1234', 'xkqk2010@gmail.com', 'KDHS');
        const employees = [];
        employees.push(intern);
        const actualResults = generateReport(employees);
        const expectedResults = `<!DOCTYPE html>
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
                <section class="columns is-6 card-columns is-full m-3">
                    <div class="card">
                        <div class="card-content px-0 pt-0">
                            <div class="box has-background-primary">
                                <h2>Susanne</h2>
                                <h2>Intern</h2>
                            </div>
                            <div class="content is-small">
                                <ul class="px-5 mx-3">
                                    <li>ID: 1234</li>
                                    <li>Email:</li><a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a>
                                    <li>School: KDHS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="assets/script/report.js"></script>
            </body>
        </html> `;
  
         expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
    it("generates an report for a single Engineer", () => {
        const employees = [];
        const engineer = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'SUSANNE85');
        
        employees.push(engineer);
        const actualResults = generateReport(employees);
        const expectedResults = `<!DOCTYPE html>
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
                <section class="columns is-6 card-columns is-full m-3">
                    <div class="card">
                        <div class="card-content px-0 pt-0">
                            <div class="box has-background-primary">
                                <h2>Susanne</h2>
                                <h2>Engineer</h2>
                            </div>
                            <div class="content is-small">
                                <ul class="px-5 mx-3">
                                    <li>ID: 1234</li>
                                    <li>Email:</li><a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a>
                                    <li>GitHub: </li><a href="https://SUSANNE85">SUSANNE85</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="assets/script/report.js"></script>
            </body>
        </html> `;
    
        expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
    it("generates an report for a two Employees, a Manager and a Engineer", () => {
        const employees = [];

        const manager = new Manager('Susanne', '1234', 'xkqk2010@gmail.com', '123456');
        const engineer = new Engineer('Susanne', '1234', 'xkqk2010@gmail.com', 'SUSANNE85');

        employees.push(manager);
        employees.push(engineer);
        const actualResults = generateReport(employees);
        const expectedResults = `<!DOCTYPE html>
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
                <section class="columns is-6 card-columns is-full m-3">
                    <div class="card">
                        <div class="card-content px-0 pt-0">
                            <div class="box has-background-primary">
                                <h2>Susanne</h2>
                                <h2>Manager</h2>
                            </div>
                            <div class="content is-small">
                                <ul class="px-5 mx-3">
                                    <li>ID: 1234</li>
                                    <li>Email:</li><a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a>
                                    <li>Office ID: 123456</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="columns is-6 card-columns is-full m-3">
                    <div class="card">
                        <div class="card-content px-0 pt-0">
                            <div class="box has-background-primary">
                                <h2>Susanne</h2>
                                <h2>Engineer</h2>
                            </div>
                            <div class="content is-small">
                                <ul class="px-5 mx-3">
                                    <li>ID: 1234</li>
                                    <li>Email:</li><a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a>
                                    <li>GitHub: </li><a href="https://SUSANNE85">SUSANNE85</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="assets/script/report.js"></script>
            </body>
        </html> `;
                
        expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
})