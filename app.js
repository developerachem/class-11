const studentTable = document.querySelector('.student-data table tbody')
const studentList = document.querySelector('.student-section .our-student')


student.map((data, index) => {
    let bn = data.bangla;
    let ag = data.agreecuncer;
    let en = data.english;
    let math = data.math;
    let ss = data.socialS;
    let s = data.sicence;
    let rel = data.religons;
    let cmrc = data.commerce;

    let achem = new Achem;

    function Achem() {

        // achem Is Gread Calculetor
        this.gread = function (mark) {

            if (mark >= 0 && mark < 33) {
                return 'F'
            } else if (mark >= 33 && mark < 40) {
                return 'D'
            } else if (mark >= 40 && mark < 50) {
                return 'C'
            } else if (mark >= 50 && mark < 60) {
                return 'B'
            } else if (mark >= 60 && mark < 70) {
                return 'A'
            } else if (mark >= 70 && mark < 80) {
                return 'A-'
            } else if (mark >= 80 && mark <= 100) {
                return 'A+'
            }

        }

        // This Is GPA Calculetor
        this.gpa = function (mark) {

            if (mark >= 0 && mark < 33) {
                return gpa = 0;

            } else if (mark >= 33 && mark < 40) {
                return gpa = 1;

            } else if (mark >= 40 && mark < 50) {
                return gpa = 2;

            } else if (mark >= 50 && mark < 60) {
                return gpa = 3;

            } else if (mark >= 60 && mark < 70) {
                return gpa = 3.5;

            } else if (mark >= 70 && mark < 80) {
                return gpa = 4;

            } else if (mark >= 80 && mark <= 100) {
                return gpa = 5;

            }

        }

        // This Is Total Gread Calculetor


        
        this.totalGpa = function (bn, en, ag, math, ss, s, rel, cmrc) {
            let totalMark = (bn + en + ag + math + ss + s + rel + cmrc)
            let greadCal = totalMark / 8;

            if (bn === 0, en === 0, ag === 0, math === 0, ss === 0, s === 0, rel === 0, cmrc === 0) {

                return `F`

            } else {

                return ` ${greadCal.toFixed(2)} `

            }

        }
      

        // This Is Total Gread Calculetor
        this.totalGread = function (gpa) {

            if (gpa >= 0 && gpa < 1) {
                return 'F'
            } else if (gpa >= 1 && gpa < 2) {
                return 'D'
            } else if (gpa >= 2 && gpa < 3) {
                return 'C'
            } else if (gpa >= 3 && gpa < 3.5) {
                return 'B'
            } else if (gpa >= 3.5 && gpa < 4) {
                return 'A'
            } else if (gpa >= 4 && gpa < 5) {
                return 'A-'
            } else if (gpa === 5) {
                return 'A+'
            }

        }

    }
    let fimelMarks = (bn + en + ag + math + ss + s + rel + cmrc)
    studentTable.innerHTML += (`
    
    <tr>
        <td>${index + 1}</td>
        <td><img style="width:60px" src="${data.image}"></td>
        <td>${data.name}</td>
        <td>${data.class}</td>
        <td>${data.rool}</td>
        <td>${data.reg}</td>
        <td>${data.loocation}</td>
        <td>${bn} / ${achem.gpa(bn)} / ${achem.gread(bn)}</td>
        <td>${en} / ${achem.gpa(en)} / ${achem.gread(en)}</td>
        <td>${math} / ${achem.gpa(math)} / ${achem.gread(math)}</td>
        <td>${s} / ${achem.gpa(s)} / ${achem.gread(s)}</td>
        <td>${ss} / ${achem.gpa(ss)} / ${achem.gread(ss)}</td>
        <td>${rel} / ${achem.gpa(rel)} / ${achem.gread(rel)}</td>
        <td>${cmrc} / ${achem.gpa(cmrc)} / ${achem.gread(cmrc)}</td>
        <td>${ag} / ${achem.gpa(ag)} / ${achem.gread(ag)}</td>
        <td>${fimelMarks}</td>
        <td>${ achem.totalGread(gpa) }</td>
        <td>${ achem.totalGpa( achem.gpa(bn), achem.gpa(en), achem.gpa(ag), achem.gpa(math), achem.gpa(ss), achem.gpa(s), achem.gpa(rel), achem.gpa(cmrc) ) }</td>
    </tr>

    `)



    studentList.innerHTML += (`
    
    <div class="student">
        <div class="student-image">
            <img src="${data.image}">
        </div>
        <ul>
            <li>Name : ${data.name}</li>
            <li>ID : ${data.id}</li>
            <li>Rool : ${data.rool}</li>
            <li>Class : ${data.class}</li>
            <li>Age : ${data.age}</li>
            <li>Loocation : ${data.loocation}</li>
        </ul>
    </div>
    
    `)
})
 

const team = document.getElementById('teamItem');

developer.map(data => {
    team.innerHTML += (`
    
    <div class="team-member">
        <div class="image">
            <img src="${data.image}">
        </div>
        <h2>Name : ${data.name}</h2>
        <h5>ID : ${data.id}</h5>
        <h5>Skill : ${data.skill}</h5>
        <h5>Age : ${data.age}</h5>
        <h5>Loocation : ${data.loocation}</h5>
        <h5>Income : ${data.income} Taka</h5>
    </div>
    
    `)
})


const contactHtml = document.querySelector('.contact-section .contact table tbody')

contact.map((data, index) => {
    contactHtml.innerHTML += (`
    
    <tr>
        <td>${index + 1}</td>
        <td><img width="60px" src="${data.image}"></td>
        <td>${data.name}</td>
        <td>${data.skill}</td>
        <td>${data.location}</td>
        <td>${data.phoneNumber}</td>
    </tr>
    
    `)
})

