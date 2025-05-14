class Company {
  constructor() {
    this.departments = new Map();
    this.avgSalaries = {};
  }

  addEmployee(name, salary, position, department) {
    const args = [name, salary, position, department];
    this.checkArgs(args);

    if (!this.departments.has(department)) {
      this.departments.set(department, []);
    }

    const newEmployee = { name, salary, position };
    this.departments.get(department).push(newEmployee);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    this.calculateAvgSalary();

    const sortedSalaries = Object.entries(this.avgSalaries).sort(
      (a, b) => b[1] - a[1]
    );
    const bestDepartmentBySalary = sortedSalaries[0];
    const bestDepartmentName = bestDepartmentBySalary[0];
    const avgSalary = bestDepartmentBySalary[1];

    const result = [
      `Best Department is: ${bestDepartmentName}`,
      `Average salary: ${avgSalary.toFixed(2)}`,
    ];

    const sortedEmployees = this.departments
      .get(bestDepartmentName)
      .sort((a, b) => {
        if (a.salary !== b.salary) {
          return b.salary - a.salary;
        }
        return a.name.localeCompare(b.name)
      });

    for (const employee of sortedEmployees) {
      result.push(`${employee.name} ${employee.salary} ${employee.position}`);
    }

    return result.join("\n");
  }

  calculateAvgSalary() {
    for (const info of this.departments) {
      const departmentName = info[0];
      const employees = this.departments.get(departmentName);
      const avgSalary =
        employees.reduce((acc, value) => acc + value.salary, 0) /
        employees.length;

      this.avgSalaries[departmentName] = avgSalary;
    }
  }

  checkArgs(args) {
    args.forEach((arg) => {
      if (!arg || arg < 0) {
        throw new Error("Invalid input!");
      }
    });
  }
}


let gosho = -1 
console.log(!gosho);
