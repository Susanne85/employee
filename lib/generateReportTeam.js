

const prettier = require("../node_modules/prettier");

function generateReportTeam(employees) {
  //console.log(employees);
  let formattedEmployees = "";

  if (employees.length != 0) {
    for (let i = 0; i < employees.length; i++) {
      let employeeRole = employees[i].getRole();

      let employeeInfo = ''

      if (employeeRole === 'Manager') {
        employeeInfo = `<li>Office ID: ${employees[i].officeNumber}</li>`;
      } else if (employeeRole === 'Intern') {
        const school = employees[i].getSchool();
        employeeInfo = `<li>School: ${employees[i].getSchool()}</li>`;
      } else if (employeeRole === 'Engineer') {
        employeeInfo = `<li>GitHub: </li><a href="https://${employees[i].getGitHub()}">${employees[i].getGitHub()}</a>`;
      }

      formattedEmployees = formattedEmployees.concat(`
      <section class="columns is-6 card-columns is-full m-3">
        <div class="card">
          <div class="card-content px-0 pt-0">
            <div class="box has-background-primary">
              <h2>${employees[i].getName()}</h2>
              <h2>${employeeRole}</h2>
            </div>
            <div class="content is-small">
              <ul class="px-5 mx-3">
                <li>ID: ${employees[i].getID()}</li>
                <li>Email:</li><a href="https://${employees[i].getEmail()}">${employees[i].getEmail()}</a>
                ${employeeInfo}
              </ul>
            </div>
          </div>
        </div>
      </section> `);
    }
    return formattedEmployees;
  } else
    return formattedEmployees;
}


module.exports = generateReportTeam;