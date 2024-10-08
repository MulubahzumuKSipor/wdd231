/* responsive Menu */
const ham_button = document.querySelector("#unseen")
const navigation = document.querySelector(".menu")

ham_button.addEventListener('click', () =>
        {
        navigation.classList.toggle('open');
        ham_button.classList.toggle('open');
        
    }
);

/* Time problem */

const lastmod = document.querySelector("#last_modified");
lastmod.innerHTML = new Date().toLocaleDateString("en-US", Option);
document.getElementById("current_year").innerHTML = new Date().getFullYear();

/* Courses Info */

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

/* Display Courses */
    const creditSum = document.querySelector("#credits")
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
            const credit = `<span>Required Credits: ${element.credits}</span>`;
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






