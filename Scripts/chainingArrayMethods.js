const employees = [
  {
    name: "John Doe",
    salary: 1100000,
    role: "Developer",
  },
  {
    name: "Jane Doe",
    salary: 6075000,
    role: "Manager",
  },
  {
    name: "Jill Doe",
    salary: 105000,
    role: "Product Owner",
  },
  {
    name: "Jake Doe",
    salary: 450000,
    role: "Developer",
  },
];

const developers = employees.filter(
  (employee) => employee.role === "Developer"
);

const developerSalaries = developers.map((developer) => developer.salary);

const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);

const averageDeveloperSalary =
  totalDeveloperSalaries / developerSalaries.length;

const nonDevelopers = employees.filter(
  (employee) => employee.role !== "Developer"
);

const nonDeveloperSalaries = nonDevelopers.map((nonDev) => nonDev.salary);

const totalNonDeveloperSalary = nonDeveloperSalaries.reduce(
  (acc, x) => acc + x,
  0
);

const averageNonDevSalary =
  totalNonDeveloperSalary / nonDeveloperSalaries.length;

