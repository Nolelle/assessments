const csv = require("csv-parser");
const fs = require("fs");
const myArgs = process.argv.slice(2);
const coursesCSV = myArgs[0];
const studentsCSV = myArgs[1];
const testsCSV = myArgs[2];
const marksCSV = myArgs[3];

const readStudentsData = (studentsCSVFile) => {
  const outputArray = [];
  fs.createReadStream(studentsCSVFile)
    .pipe(csv())
    .on("data", (row) => {
      const id = row.id;
      const name = row.name;
      const obj = {
        id,
        name,
      };
      outputArray.push(obj);
    })
    .on("end", () => {
      console.log({ outputArray });
      console.log("CSV file successfully processed");
    });
};
const result = readStudentsData(studentsCSV);
console.log({ result });
