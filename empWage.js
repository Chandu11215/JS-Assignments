const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 3;
if(empCheck == IS_ABSENT)
{
    console.log("UC1 - Employee is Absent");
}
else
{
    console.log("UC! - Employee is Present");
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 1600;


let empHrs = 0;
function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME :
    empHrs = PART_TIME_HOURS;
    break;
    case IS_FULL_TIME :
        empHrs = FULL_TIME_HOURS;
        break;
        default :
        empHrs = 0;
}
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("  Emp wage : " + empWage);

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME :
          return PART_TIME_HOURS;
    case IS_FULL_TIME :
           return FULL_TIME_HOURS;
        default :
        return 0;
}
}


//uc4
for(let day = 0; day<NUM_OF_WORKING_DAYS; day++)
{
    empHrs += getWorkingHours(empCheck)
}

//uc5


let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs<= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    totalEmpHrs += getWorkingHours(empCheck);
}
console.log(" totalDays :" + totalWorkingDays + " TotalHrs :" + totalEmpHrs + " Emp Wage :" +empWage );



