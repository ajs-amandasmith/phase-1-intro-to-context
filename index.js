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


// The payroll system
//     populates a record from an Array
//       1) has a function called createEmployeeRecord
//       createEmployeeRecord
//         2) populates a firstName field from the 0th element
//         3) populates a familyName field from the 1th element
//         4) populates a title field from the 2th element
//         5) populates a payPerHour field from the 3th element
//         6) initializes a field, timeInEvents, to hold an empty Array
//         7) initializes a field, timeOutEvents, to hold an empty Array
//     process an Array of Arrays into an Array of employee records


//   6) The payroll system
//        populates a record from an Array
//          createEmployeeRecord
//            initializes a field, timeInEvents, to hold an empty Array:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:29:28)
//       at processImmediate (node:internal/timers:464:21)

//   7) The payroll system
//        populates a record from an Array
//          createEmployeeRecord
//            initializes a field, timeOutEvents, to hold an empty Array:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:34:28)
//       at processImmediate (node:internal/timers:464:21)






//       8) has a function called createEmployeeRecords
//       createEmployeeRecords
//         9) creates two records
//         10) correctly assigns the first names
//         11) creates more than 2 records
//     it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//       12) has a function called createTimeInEvent
//       createTimeInEvent
//         13) creates the correct type
//         14) extracts the correct date
//         15) extracts the correct hour
//     it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//       16) has a function called createTimeOutEvent
//       createTimeOutEvent
//         17) creates the correct type
//         18) extracts the correct date
//         19) extracts the correct hour
//     Given an employee record with a date-matched timeInEvent and timeOutEvent
//       20) hoursWorkedOnDate calculates the hours worked when given an employee record and a date
//       hoursWorkedOnDate
//         21) calculates that the employee worked 2 hours
//     Given an employee record with a date-matched timeInEvent and timeOutEvent
//       22) wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
//       wagesEarnedOnDate
//         23) calculates that the employee earned 54 dollars
//     Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//       24) allWagesFor aggregates all the dates' wages and adds them together
//       allWagesFor
//         25) calculates that the employee earned 378 dollars
//     Given an array of multiple employees
//       26) calculatePayroll aggregates all the dates' wages and adds them together
//       calculatePayroll
//         27) calculates that the employees earned 770 dollars
//     runs payroll using the mock data provided by Ultron data systems
//       Dependent functions: createEmployeeRecords
//         takes CSV data, returns an array of employee records
//           28) exists
//           29) returns an Array with 2 records for Loki and Natalia
//       Full Payroll Test
//         from several imported CSV structures
//           calculatePayroll
//             30) exists
//             31) correctly sums the payroll burden to $11,880 when passed an array of employee records


//   0 passing (168ms)
//   31 failing



//   8) The payroll system
//        process an Array of Arrays into an Array of employee records
//          has a function called createEmployeeRecords:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:42:14)
//       at processImmediate (node:internal/timers:464:21)

//   9) The payroll system
//        process an Array of Arrays into an Array of employee records
//          createEmployeeRecords
//            creates two records:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:54:31)
//       at processImmediate (node:internal/timers:464:21)

//   10) The payroll system
//        process an Array of Arrays into an Array of employee records
//          createEmployeeRecords
//            correctly assigns the first names:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:59:31)
//       at processImmediate (node:internal/timers:464:21)

//   11) The payroll system
//        process an Array of Arrays into an Array of employee records
//          createEmployeeRecords
//            creates more than 2 records:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:77:31)
//       at processImmediate (node:internal/timers:464:21)

//   12) The payroll system
//        it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//          has a function called createTimeInEvent:
//      ReferenceError: createTimeInEvent is not defined
//       at Context.<anonymous> (test/indexTest.js:88:14)
//       at processImmediate (node:internal/timers:464:21)

//   13) The payroll system
//        it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//          createTimeInEvent
//            creates the correct type:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:95:24)
//       at processImmediate (node:internal/timers:464:21)

//   14) The payroll system
//        it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//          createTimeInEvent
//            extracts the correct date:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:102:24)
//       at processImmediate (node:internal/timers:464:21)

//   15) The payroll system
//        it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//          createTimeInEvent
//            extracts the correct hour:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:109:24)
//       at processImmediate (node:internal/timers:464:21)

//   16) The payroll system
//        it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//          has a function called createTimeOutEvent:
//      ReferenceError: createTimeOutEvent is not defined
//       at Context.<anonymous> (test/indexTest.js:120:14)
//       at processImmediate (node:internal/timers:464:21)

//   17) The payroll system
//        it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//          createTimeOutEvent
//            creates the correct type:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:127:24)
//       at processImmediate (node:internal/timers:464:21)

//   18) The payroll system
//        it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//          createTimeOutEvent
//            extracts the correct date:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:134:24)
//       at processImmediate (node:internal/timers:464:21)

//   19) The payroll system
//        it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//          createTimeOutEvent
//            extracts the correct hour:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:141:24)
//       at processImmediate (node:internal/timers:464:21)

//   20) The payroll system
//        Given an employee record with a date-matched timeInEvent and timeOutEvent
//          hoursWorkedOnDate calculates the hours worked when given an employee record and a date:
//      ReferenceError: hoursWorkedOnDate is not defined
//       at Context.<anonymous> (test/indexTest.js:152:14)
//       at processImmediate (node:internal/timers:464:21)

//   21) The payroll system
//        Given an employee record with a date-matched timeInEvent and timeOutEvent
//          hoursWorkedOnDate
//            calculates that the employee worked 2 hours:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:157:9)
//       at processImmediate (node:internal/timers:464:21)

//   22) The payroll system
//        Given an employee record with a date-matched timeInEvent and timeOutEvent
//          wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour:
//      ReferenceError: wagesEarnedOnDate is not defined
//       at Context.<anonymous> (test/indexTest.js:168:14)
//       at processImmediate (node:internal/timers:464:21)

//   23) The payroll system
//        Given an employee record with a date-matched timeInEvent and timeOutEvent
//          wagesEarnedOnDate
//            calculates that the employee earned 54 dollars:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:173:9)
//       at processImmediate (node:internal/timers:464:21)

//   24) The payroll system
//        Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//          allWagesFor aggregates all the dates' wages and adds them together:
//      ReferenceError: allWagesFor is not defined
//       at Context.<anonymous> (test/indexTest.js:184:14)
//       at processImmediate (node:internal/timers:464:21)

//   25) The payroll system
//        Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//          allWagesFor
//            calculates that the employee earned 378 dollars:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:189:9)
//       at processImmediate (node:internal/timers:464:21)

//   26) The payroll system
//        Given an array of multiple employees
//          calculatePayroll aggregates all the dates' wages and adds them together:
//      ReferenceError: calculatePayroll is not defined
//       at Context.<anonymous> (test/indexTest.js:204:14)
//       at processImmediate (node:internal/timers:464:21)

//   27) The payroll system
//        Given an array of multiple employees
//          calculatePayroll
//            calculates that the employees earned 770 dollars:
//      ReferenceError: createEmployeeRecord is not defined
//       at Context.<anonymous> (test/indexTest.js:209:23)
//       at processImmediate (node:internal/timers:464:21)

//   28) The payroll system
//        runs payroll using the mock data provided by Ultron data systems
//          Dependent functions: createEmployeeRecords
//            takes CSV data, returns an array of employee records
//              exists:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:245:18)
//       at processImmediate (node:internal/timers:464:21)

//   29) The payroll system
//        runs payroll using the mock data provided by Ultron data systems
//          Dependent functions: createEmployeeRecords
//            takes CSV data, returns an array of employee records
//              returns an Array with 2 records for Loki and Natalia:
//      ReferenceError: createEmployeeRecords is not defined
//       at Context.<anonymous> (test/indexTest.js:253:11)
//       at processImmediate (node:internal/timers:464:21)

//   30) The payroll system
//        runs payroll using the mock data provided by Ultron data systems
//          Full Payroll Test
//            from several imported CSV structures
//              calculatePayroll
//                exists:
//      ReferenceError: calculatePayroll is not defined
//       at Context.<anonymous> (test/indexTest.js:299:20)
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