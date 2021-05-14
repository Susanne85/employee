

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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
                <link rel="stylesheet" type="text/css" href="../src/css/style.css">
                <title>My Teams Report</title>
            </head>
            <body>
                <header class="content is-medium has-text-centered has-background-primary">
                    <h1>My Team</h1>
                </header>
                <div class="container">
                    <div class="columns is-6 card-columns">
                        <div class="column is-one-third card-columns-nested">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-header-title has-background-primary">
                                        <h2 class="is-size-5 has-text-weight-bold">Susanne</h2>
                                        <span class="icon-text">
                                            <span class="icon ml-5 mt-5">
                                                <i class="fa fa-coffee"></i>
                                            </span>
                                            <span class="mt-5">Manager</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <ul>
                                        <li>ID: 1234</li>
                                        <li>Email: <a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a></li>
                                        <li>Office ID: 123456</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
                <link rel="stylesheet" type="text/css" href="../src/css/style.css">
                <title>My Teams Report</title>
            </head>
            <body>
                <header class="content is-medium has-text-centered has-background-primary">
                    <h1>My Team</h1>
                </header>
                <div class="container">
                    <div class="columns is-6 card-columns">
                        <div class="column is-one-third card-columns-nested">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-header-title has-background-primary">
                                        <h2 class="is-size-5 has-text-weight-bold">Susanne</h2>
                                        <span class="icon-text">
                                            <span class="icon ml-5 mt-5">
                                                <i class="fa fa-graduation-cap"></i>
                                            </span>
                                            <span class="mt-5">Intern</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <ul>
                                        <li>ID: 1234</li>
                                        <li>Email: <a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a></li>
                                        <li>School: KDHS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
                <link rel="stylesheet" type="text/css" href="../src/css/style.css">
                <title>My Teams Report</title>
            </head>
            <body>
                <header class="content is-medium has-text-centered has-background-primary">
                    <h1>My Team</h1>
                </header>
                <div class="container">
                    <div class="columns is-6 card-columns">
                        <div class="column is-one-third card-columns-nested">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-header-title has-background-primary">
                                        <h2 class="is-size-5 has-text-weight-bold">Susanne</h2>
                                        <span class="icon-text">
                                            <span class="icon ml-5 mt-5">
                                                <i class="fa fa-calculator"></i>
                                            </span>
                                            <span class="mt-5">Engineer</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <ul>
                                        <li>ID: 1234</li>
                                        <li>Email: <a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a></li>
                                        <li>GitHub: <a href="https://github.com/SUSANNE85">SUSANNE85</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html> `;

        expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
    it("generates an report for a two Employees, a Manager and a Engineer", () => {
        const employees = [];

        const manager = new Manager('Susanne', '1234', 'xkqk2010@gmail.com', '123456');
        const engineer = new Engineer('Freddie', '32', 'Freddie@gmail.com', 'Freddie');

        employees.push(manager);
        employees.push(engineer);
        const actualResults = generateReport(employees);
        const expectedResults = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
                <link rel="stylesheet" type="text/css" href="../src/css/style.css">
                <title>My Teams Report</title>
            </head>
            <body>
                <header class="content is-medium has-text-centered has-background-primary">
                    <h1>My Team</h1>
                </header>
                <div class="container">
                    <div class="columns is-6 card-columns">
                        <div class="column is-one-third card-columns-nested">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-header-title has-background-primary">
                                    <h2 class="is-size-5 has-text-weight-bold">Susanne</h2>
                                    <span class="icon-text">
                                        <span class="icon ml-5 mt-5">
                                            <i class="fa fa-coffee"></i>
                                        </span>
                                        <span class="mt-5">Manager</span>
                                    </span>
                                </div>
                            </div>
                            <div class="card-content">
                                <ul>
                                    <li>ID: 1234</li>
                                    <li>Email: <a href="https://xkqk2010@gmail.com">xkqk2010@gmail.com</a></li>
                                    <li>Office ID: 123456</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div class="column is-one-third card-columns-nested">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-header-title has-background-primary">
                                    <h2 class="is-size-5 has-text-weight-bold">Freddie</h2>
                                    <span class="icon-text">
                                        <span class="icon ml-5 mt-5">
                                            <i class="fa fa-calculator"></i>
                                        </span>
                                        <span class="mt-5">Engineer</span>
                                    </span>
                                  </div>
                                </div>
                                <div class="card-content">
                                    <ul>
                                        <li>ID: 32</li>
                                        <li>Email: <a href="https://Freddie@gmail.com">Freddie@gmail.com</a></li>
                                        <li>GitHub: <a href="https://github.com/Freddie">Freddie</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html> `;

        expect(actualResults).toEqual(prettier.format(expectedResults, { parser: "html" }));
    });
})