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
    document.getElementById("empPid").innerHTML = totalSal;
}

function calTotalSalaryEmp2()
{
    var totalSal2, basic12per2, basicTds2;
    totalSal2 = 0;
    basic12per2 = (emp2Details.basicSalary * 12 / 100);
    basicTds2 = (emp2Details.basicSalary * 2 / 100);
    totalSal2 = totalSal2 + emp2Details.basicSalary + basic12per2 + basicTds2;
    document.getElementById("empPid").innerHTML = totalSal2;
}

//3. Create Array: We can create Arrays in two ways-:

// a) Using Literal 
var empNames = ["Nikhil","Bhushan","Pooja"];
// b) Using Constructor (new keyword)
var empNames = new Array("Nikhil","Bhushan","Pooja");


//4.Create Array of object(Object should be id property ) and loop through Array and find all ids. Use For Each loop
//5. 5.	Create Array of object(Object should be id property ) and loop through Array and find all ids. Use Map function 

var emp1Info = {empID:6030, empName:"Ankush Markad", basicSalary:45000};
var emp2Info = {empID:5030, empName:"Nikhil Kalamkar", basicSalary:65000};
var empInformation = [emp1Info, emp2Info];

function empDetailsFunction(empData, empIndex)
{  
    document.getElementById("empDataid").innerHTML = document.getElementById("empDataid").innerHTML + "Employee Id:" + empData.empID + "<br/>";
}


//6. Find Angular in given array [“C#”, “Javascript”,”Angular”,”HTML”]

function findLangInfo()
{
    var langInfo = ["C#", "Javascript","Angular","HTML"];
    var angularIndex = langInfo.indexOf("Angular");
    document.getElementById("langInfoId").innerHTML = angularIndex;
}

var langString = ["C#", "Javascript","Angular","HTML"];

function arrayMethods()
{ 
    //7. Add New “Typescript ,AmaZon Web Service, SAP” in Array [“C#”, “Javascript”,”Angular”,”HTML”]
   // langString.push("Typescript", "AmaZon Web Service", "SAP");
   
   //8.	Remove HTML from given Array [“C#”, “Javascript”,”Angular”,”HTML”]
   //langString.pop();
   
   //9.	Remove “Javascript”  from  Array [“C#”, “Javascript”,”Angular”,”HTML”]
   //langString.splice(1,1);

   //document.getElementById("stringPid").innerHTML = langString;



   //10. Get JAvascript and Angular from [“C#”, “Javascript”,”Angular”,”HTML”]

    var newElmentString = langString.slice(1,3);
    document.getElementById("stringPid").innerHTML = newElmentString;
}