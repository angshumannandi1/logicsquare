function generateStudentMarkSheets(students, details) {
    const studentsMarkSheets = [];
  
    // Iterate through each student
    students.forEach(student => {
      const studentDetails = details.find(detail => detail.Roll === student.Roll);
  
      // If details are available for the student
      if (studentDetails) {
        const { subjects } = studentDetails;
        const totalMarks = Object.values(subjects).reduce((total, mark) => total + mark, 0);
  
        // Determine pass/fail status based on the total marks threshold (e.g., 200)
        const status = totalMarks >= 200 ? "pass" : "fail";
  
        // Create the mark sheet for the current student
        const markSheet = {
          name: student.name,
          Roll: student.Roll,
          ...subjects,
          total: totalMarks,
          status: status
        };
  
        // Add the mark sheet for the current student to the list
        studentsMarkSheets.push(markSheet);
      }
    });
  
    return studentsMarkSheets;
  }
  
  // Example usage:
  const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
  ];
  
  const details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
  ];
  
  const studentsMarkSheets = generateStudentMarkSheets(students, details);
  
  // Print the result
  console.log(studentsMarkSheets);
  