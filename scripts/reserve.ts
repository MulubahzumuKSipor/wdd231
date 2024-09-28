        

        

    

    let filterC = citynames.filter(city => city.charAt(0) === 'C');
    document.querySelector('#c-names').textContent = filterC;

    courseContainer.appendChild(subjectTag);
        courseContainer.appendChild(numberTag);
        courseContainer.appendChild(titleTag);
        courseContainer.appendChild(creditTag);
        courseContainer.appendChild(certificateTag);
        courseContainer.appendChild(descriptionTag);
        courseContainer.appendChild(technologyTag);
        courseContainer.appendChild(completedTag);


        headingContainer = document.createElement('section');
            headingContainer.classList.add('heading_container');

            const buttonTag1 = document.createElement('button');
            const buttonTag2 = document.createElement('button');
            const buttonTag3 = document.createElement('button');
            

            const button1 = `${first_button}`
            const button2 = `${second_button}`
            const button3 = `${third_button}`

            buttonTag1.innerHTML = button1;
            buttonTag2.innerHTML = button2;
            buttonTag3.innerHTML = button3;

            headingContainer.appendChild(buttonTag1);
            headingContainer.appendChild(buttonTag2);
            headingContainer.appendChild(buttonTag3);

            header.append(headingContainer)



            const header = document.querySelector("#courseHead");
    function displayCourseHead(aList) {
        document.querySelector("#courseHead").innerHTML = "";
        aList.forEach(element => {
            headingContainer = document.createElement('section');
            headingContainer.classList.add('heading_container');


            const buttonTag1 = document.createElement('button');
            

            const button1 = `${element.button1}`
            

            buttonTag1.innerHTML = button1;
            

            headingContainer.appendChild(buttonTag1);
            
            

            header.append(headingContainer);


        
        
        
        })} 
displayCourseHead(buttons);

const buttons = [
    {button1: "All"},
    {button1: "CSE"},
    {button1: "WDD"}
]



const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
        technology: [
            "Python"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        technology: [
            "HTML",
            "CSS"
        ],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        technology: [
            "Python"
        ],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        technology: [
            "C#"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        technology: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        technology: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        completed: false
    }
]


const div = document.querySelector("#courses");
const creditsDiv = document.querySelector("#credits");
const allCourses = document.querySelector("#all");
const cseCourses = document.querySelector("#cse");
const wddCourses = document.querySelector("#wdd");

DisplayCourses(courses);

allCourses.addEventListener("click", () => {
    DisplayCourses(courses);
});

cseCourses.addEventListener("click", () => {
    DisplayCourses(courses.filter(course => course.subject == "CSE"));
});

wddCourses.addEventListener("click", () => {
    DisplayCourses(courses.filter(course => course.subject == "WDD"));
});

function DisplayCourses(filteredCourses){
    div.innerHTML="";
    filteredCourses.forEach(course => {
        const courseSubject = document.createElement("p");
        courseSubject.innerHTML=`<h3>${course.subject} ${course.number}</h3>`;
        div.appendChild(courseSubject)

        if (course.completed === true) {
            courseSubject.classList.add("completed");
        }
        else{
            courseSubject.classList.add("incomplete");
        }
    });

    const creditsTotal = filteredCourses.reduce((total, course) =>{
        return total + course.credits;
    }, 0);

    creditsDiv.innerHTML = `<h3>Total Required Credits: ${creditsTotal}</h3>`;
};


















/* Display Courses */

const container = document.querySelector("#course");
function displayCourse(aList) {
    container.innerHTML = "";
    aList.forEach(element => {
        const courseContainer = document.createElement("section");
        courseContainer.classList.add('section')

        const subjectTag = document.createElement("p");
        const numberTag = document.createElement("p");
        const titleTag = document.createElement("p");
        const creditTag = document.createElement("p");
        const certificateTag = document.createElement("p");
        const descriptionTag = document.createElement("p");
        const technologyTag = document.createElement("p");
        const completedTag = document.createElement("p");

        const subject = `${element.subject} ${element.number}`;
        const credit = `<span>Credits Required: </span>${element.credits}`
        const number = `${element.number}`
        const title = `${element.title}`
        const certificate = `${element.certificate}`
        const description = `${element.description}`
        const technology = `${element.technology}`
        const completed = `${element.completed}`




        numberTag.innerHTML = number;
        titleTag.innerHTML = title;
        creditTag.innerHTML = credit;
        certificateTag.innerHTML = certificate;
        descriptionTag.innerHTML = description;
        technologyTag.innerHTML = technology;
        completedTag.innerHTML = completed;
        subjectTag.innerHTML = subject;
        creditTag.innerHTML = credit;






        
        if (element.completed === true){
        courseContainer.classList.add("complete");
        }
        else{
            courseContainer.classList.add("incomplete")
        }
        
        courseContainer.appendChild(subjectTag);
        courseContainer.appendChild(creditTag);
        

        container.append(courseContainer);
});
}

displayCourse(courses);


/* Course Buttons */


const button1 = document.querySelector('#all');
const button2 = document.querySelector('#wdd');
const button3 = document.querySelector('#cse');



const display = button1.addEventListener('click', () => {
displayCourse(courses)
})

button2.addEventListener("click", () => {
displayCourse(courses.filter(course => course.subject == 'WDD'))
})

button3.addEventListener('click', () => {
displayCourse(courses.filter(course => course.subject == 'CSE'))
})


const total_credit = document.querySelector("#credits")
function totalCredits(creditSum){
total_credit.innerHTML="";
creditSum.forEach(course => {
    const courseSubject = document.createElement("p");
    courseSubject.innerHTML=`<h3>${course.subject} ${course.number}</h3>`;
    div.appendChild(courseSubject)

    if (course.completed === true) {
        courseSubject.classList.add("completed");
    }
    else{
        courseSubject.classList.add("incomplete");
    }
});

const creditsTotal = filteredCourses.reduce((total, course) =>{
    return total + course.credits;
}, 0);

creditsDiv.innerHTML = `<h3>Total Required Credits: ${creditsTotal}</h3>`;
};

totalCredits(courses)



