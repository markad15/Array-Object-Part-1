//1. Object with this properties: First Name , Last Name and Department
 var empDetails = {firstName:"Ankush", lastName:"Markad", department:"Development"};

 //2. Create 2 Employee object and add properties : calculate Salary

 var emp1Details = {empName:"Ankush Markad", empID:6030, basicSalary:45000};
 var emp2Details = {empName:"Bhushan Bhide", empID:5030, basicSalary:65000};

function calTotalSalaryEmp1()
{
    var totalSal, basic12per, basicTds;
    totalSal = 0;
    basic12per = (emp1Details.basicSalary * 12 / 100);
    basicTds = (emp1Details.basicSalary * 2 / 100);
    totalSal = totalSal + emp1Details.basicSalary + basic12per + basicTds;
}

function calTotalSalaryEmp2()
{
    var totalSal2, basic12per2, basicTds2;
    totalSal2 = 0;
    basic12per2 = (emp2Details.basicSalary * 12 / 100);
    basicTds2 = (emp2Details.basicSalary * 2 / 100);
    totalSal2 = totalSal2 + emp2Details.basicSalary + basic12per2 + basicTds2;
}