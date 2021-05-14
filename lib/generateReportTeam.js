

const prettier = require("../node_modules/prettier");

function generateReportTeam(employees) {
  let formattedEmployees = "";

  if (employees.length != 0) {
    for (let i = 0; i < employees.length; i++) {
      let employeeRole = employees[i].getRole();

      let employeeInfo = '';
      let employeeIcon = '';

      if (employeeRole === 'Manager') {
        employeeInfo = `<li>Office ID: ${employees[i].officeNumber}</li>`;
        employeeIcon = 'fa fa-coffee';
      } else if (employeeRole === 'Intern') {
        const school = employees[i].getSchool();
        employeeInfo = `<li>School: ${employees[i].getSchool()}</li>`;
        employeeIcon = 'fa fa-graduation-cap';
      } else if (employeeRole === 'Engineer') {
        employeeInfo = `<li>GitHub: <a href="https://github.com/${employees[i].getGitHub()}">${employees[i].getGitHub()}</a> </li>`;
        employeeIcon = 'fa fa-calculator';
      }

      formattedEmployees = formattedEmployees.concat(`
      <div class="column is-one-third card-columns-nested">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title has-background-primary">
              <h2 class="is-size-5 has-text-weight-bold">${employees[i].getName()}</h2>
              <span class="icon-text">
                <span class="icon ml-5 mt-5">
                  <i class="${employeeIcon}"></i>
                </span>
                <span class="mt-5">${employeeRole}</span> 
              </span>
            </div>
          </div>
          <div class="card-content">
            <ul>
              <li>ID: ${employees[i].getID()}</li>
              <li>Email: <a href="https://${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
              ${employeeInfo}
            </ul>
          </div>
        </div>
      </div> `);
    }
    return formattedEmployees;
  } else
    return formattedEmployees;
}


module.exports = generateReportTeam;