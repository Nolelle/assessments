const csv = require("csv-parser");
const fs = require("fs");

// Input format: node app.js courses.csv students.csv tests.csv marks.csv output.json
const myArgs = process.argv.slice(2);
const coursesCSV = myArgs[0];
const studentsCSV = myArgs[1];
const testsCSV = myArgs[2];
const marksCSV = myArgs[3];
const outputJSONFile = myArgs[4];

const coursesData = [];
const testsData = [];
const marksData = [];
const studentsData = [];

const outputData = {
  students: [],
};

fs.createReadStream(studentsCSV)
  .pipe(csv())
  .on("data", (row) => {
    const id = row.id;
    const name = row.name;
    const courses = [];
    const obj = {
      id,
      name,
      courses,
    };
    studentsData.push(obj);
  });
fs.createReadStream(coursesCSV)
  .pipe(csv())
  .on("data", (row) => {
    const id = row.id;
    const name = row.name;
    const teacher = row.teacher;
    const obj = {
      id,
      name,
      teacher,
    };
    coursesData.push(obj);
  });

fs.createReadStream(testsCSV)
  .pipe(csv())
  .on("data", (row) => {
    const id = row.id;
    const course_id = row.course_id;
    const weight = row.weight;
    const obj = {
      id,
      course_id,
      weight,
    };
    testsData.push(obj);
  });

fs.createReadStream(marksCSV)
  .pipe(csv())
  .on("data", (row) => {
    const test_id = row.test_id;
    const student_id = row.student_id;
    const mark = row.mark;
    const obj = {
      test_id,
      student_id,
      mark,
    };
    marksData.push(obj);
  })
  .on("end", () => {
    console.log({ marksData });
    console.log({ studentsData });
    console.log({ testsData });
    console.log({ coursesData });
    // console.log("All CSV file successfully processed");
    for (let student of studentsData) {
      outputData.students.push(student);
    }
    // console.log(outputData);
    const students = outputData.students;
    for (let student of students) {
      for (let mark of marksData) {
        if (student.id === mark.student_id) {
        }
      }
    }
  });

// Write to JSON FILE
// const json = JSON.stringify(outputData);

// fs.writeFile("output.json", json, "utf8", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });
