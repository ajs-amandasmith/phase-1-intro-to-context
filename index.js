// Your code here
function createEmployeeRecord(array) {
  const record = {};

  record.firstName = array[0];
  record.familyName = array[1];
  record.title = array[2];
  record.payPerHour = array[3];
  record.timeInEvents = [];
  record.timeOutEvents = [];

  return record;
}

createEmployeeRecord(['Gray', 'Worm', 'Security', 1])

function createEmployeeRecords(arrayOfArrays) {
  const records = [];
  
  for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentRecord = {};
    currentRecord.firstName = arrayOfArrays[i][0];
    currentRecord.familyName = arrayOfArrays[i][1];
    currentRecord.title = arrayOfArrays[i][2];
    currentRecord.payPerHour = arrayOfArrays[i][3];
    currentRecord.timeInEvents = [];
    currentRecord.timeOutEvents = [];
    records.push(currentRecord);
  }
  return records;
}

createEmployeeRecords([
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3]
]);

function createTimeInEvent(record, timeIn) {
  const timeInArray = timeIn.split(' ');
  const date = timeInArray[0];
  const hour = parseInt(timeInArray[1]);
  const newEvent = {};
  newEvent.type = "TimeIn";
  newEvent.date = date;
  newEvent.hour = hour;
  record.timeInEvents.push(newEvent);
  return record;
}

createTimeInEvent(createEmployeeRecord(['Gray', 'Worm', 'Security', 1]), "2014-02-28 1400");

function createTimeOutEvent(record, timeOut) {
  const timeOutArray = timeOut.split(' ');
  const date = timeOutArray[0];
  const hour = parseInt(timeOutArray[1]);
  const newEvent = {};
  newEvent.type = "TimeOut";
  newEvent.date = date;
  newEvent.hour = hour;
  record.timeOutEvents.push(newEvent);
  return record;
}

createTimeOutEvent(createEmployeeRecord(['Gray', 'Worm', 'Security', 1]), "2015-02-28 1700")

function hoursWorkedOnDate (record, date) {
  // createTimeInEvent(record, "0044-03-15 0900")
  // createTimeOutEvent(record, "0044-03-15 1100")

  const timeInObject =  record.timeInEvents.find(element => element.date === date);
  const timeOutObject = record.timeOutEvents.find(element => element.date === date);

  const hoursWorked = (timeOutObject.hour - timeInObject.hour) / 100;
  return hoursWorked;

//   if (record.timeInEvents[0].date === date && record.timeOutEvents[0].date === date) {
//     const hoursWorked = (record.timeOutEvents[0].hour - record.timeInEvents[0].hour) / 100;
//     return hoursWorked;
//   }
}

// hoursWorkedOnDate(createEmployeeRecord(["Julius", "Caesar", "General", 1000]), "0044-03-15")

function wagesEarnedOnDate(record, date) {
  // createTimeInEvent(record, "0044-03-15 0900");
  // createTimeOutEvent(record, "0044-03-15 1100");

  const hoursWorked = hoursWorkedOnDate(record, date);
  const payPerHour = record.payPerHour;
  return hoursWorked * payPerHour;
}

// wagesEarnedOnDate(createEmployeeRecord(["Julius", "Caesar", "General", 27]), "0044-03-15")

function allWagesFor(record) {
  // createTimeInEvent(record, "0044-03-14 0900");
  // createTimeOutEvent(record, "0044-03-14 2100");

  // createTimeInEvent(record, "0044-03-15 0900");
  // createTimeOutEvent(record, "0044-03-15 1100");

  const dateArray = record.timeInEvents.map(object => object.date);

  const payArray = dateArray.map(date => {
    let temp = wagesEarnedOnDate(record, date)
    return temp;
  });

  let totalPay = 0;

  payArray.forEach(pay => {
    totalPay += pay;
  })

  return totalPay;
}

allWagesFor(createEmployeeRecord(["Julius", "Caesar", "General", 27]))

function calculatePayroll(array) {
  // takes in an array of employees
  let totalWages = [];
  array.forEach(function (e) {
    let record = e;
    totalWages.push(allWagesFor(e));
  })
  let finalWages = totalWages.reduce((a, e) => a + e, 0)

  return finalWages;

}

let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10]);
let sRecord = createEmployeeRecord(["Simba", "", "King", 100])
let sTimeData = [
  ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
  ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
]
let rTimeData = [
  ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
  ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
]
sTimeData.forEach(function (d) {
  let [dIn, dOut] = d;
  sRecord = createTimeInEvent(sRecord, dIn);
  sRecord = createTimeOutEvent(sRecord, dOut);
})
rTimeData.forEach(function (d) {
  let [dIn, dOut] = d;
  rRecord = createTimeInEvent(rRecord, dIn);
  rRecord = createTimeOutEvent(rRecord, dOut);
})
let employees = [sRecord, rRecord];
console.log(calculatePayroll(employees))


//     Given an array of multiple employees
//       26) calculatePayroll aggregates all the dates' wages and adds them together
//       calculatePayroll
//         27) calculates that the employees earned 770 dollars
//       Full Payroll Test
//         from several imported CSV structures
//           calculatePayroll
//             30) exists
//             31) correctly sums the payroll burden to $11,880 when passed an array of employee records


//   describe("calculatePayroll", function () {
//     it("calculates that the employees earned 770 dollars", function () {
//       let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
//       let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

//       let sTimeData = [
//         ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
//         ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
//       ]

//       let rTimeData = [
//         ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
//         ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
//       ]

//       sTimeData.forEach(function (d) {
//         let [dIn, dOut] = d
//         sRecord = createTimeInEvent(sRecord, dIn)
//         sRecord = createTimeOutEvent(sRecord, dOut)
//       })

//       rTimeData.forEach(function (d, i) {
//         let [dIn, dOut] = d
//         rRecord = createTimeInEvent(rRecord, dIn)
//         rRecord = createTimeOutEvent(rRecord, dOut)
//       })

//       let employees = [sRecord, rRecord]
//       let grandTotalOwed = employees.reduce((m, e) => m + allWagesFor(e), 0)
//       expect(grandTotalOwed).to.equal(calculatePayroll(employees))
//     })
//   })
// })



//   27) The payroll system
//        Given an array of multiple employees
//          calculatePayroll
//            calculates that the employees earned 770 dollars:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:209:23)
//       at processImmediate (node:internal/timers:464:21)


//   31) The payroll system
//        runs payroll using the mock data provided by Ultron data systems
//          Full Payroll Test
//            from several imported CSV structures
//              calculatePayroll
//                correctly sums the payroll burden to $11,880 when passed an array of employee records:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:303:35)
//       at processImmediate (node:internal/timers:464:21)