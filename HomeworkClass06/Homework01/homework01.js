fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
  .then(response => response.json())
  .then(students => {

    let femaleNameGrade = students.filter(student => student.gender === 'Female' && student.averageGrade === 5)
        .map(student => student.firstName);
            console.log(femaleNameGrade);

    let maleFullNamePlaceAge = students.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18 )
        .map(student => `${student.firstName} ${student.lastName}` );
            console.log(maleFullNamePlaceAge);

    let femaleGradeAge = students.filter(student => student.gender === 'Female' && student.age > 24 )
        .map(student => student.averageGrade);
            console.log(femaleGradeAge);

    let sortByLastName = students.sort((student1, student2) => student1.lastName.localeCompare(student2.lastName));
        console.log(sortByLastName);

  })

  .catch(error => {
    console.error(error);
  });

