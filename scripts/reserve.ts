        

        

    

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
