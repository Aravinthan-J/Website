var user = [{
        name: 'a',
        dob: '01-01-00',
        email: "a@gmail.com",
        ph: 1,
        dept: 'ECE',
        reg: "123",
        img: "per1.png",
        result: {
            "Engineering Mathematics - II ": "O ",
            "Circuit Analysis ": "O",
            "Electronic Devices": "A+",
            "Basic Electrical and Instrumentation Engineering": "A",
            "Physics for Electronics Engineering": "A+",
            "Technical English": "A"
        },
        fees: {
            "Total Fees": " 1,30,000 Rs",
            "Paid Fees": "1,00,000 Rs",
            "Pending Fees": "30,000 Rs"
        },
        other: {
            "Tution Fee": "30,000",
            "Exam Fee": "5,000",
            "Bus Fee": "---",
            "Hostel ": " Yes",
            "Room Rent": "20,000",
            "Mess Fee": "55,000",
            "Book Fee": "20,000",
            "Counselling": "Yes"
        }

    },
    {
        name: 'b',
        dob: '02-02-99',
        email: "b@gmail.com",
        ph: 2,
        dept: 'EEE',
        reg: "456",
        img: "per2.png",
        result: {
            "Engineering Mathematics - II ": "A+",
            "Circuit Theory": "A",
            "Environmental Science and Engineering ": " A ",
            "Basic Civil and Mechanical Engineering": "A+",
            "Physics for Electronics Engineering": "A",
            "Technical English": "B+"
        },
        fees: {
            "Total Fees": " 1,50,000 Rs",
            "Paid Fees": "1,10,000 Rs",
            "Pending Fees": "40,000 Rs"
        },
        other: {
            "Tution Fee": "50,000",
            "Exam Fee": "5,000",
            "Bus Fee": "---",
            "Hostel ": " Yes",
            "Room Rent": "20,000",
            "Mess Fee": "55,000",
            "Book Fee": "20,000",
            "Counselling": "No"
        }
    },
    {
        name: 'c',
        dob: '03-03-98',
        email: "c@gmail.com",
        ph: 3,
        dept: 'CSE',
        reg: "567",
        img: "per3.jfif",
        result: {
            "Engineering Mathematics - II ": "B",
            "Programming in C ": "B+",
            "Environmental Science and Engineering": "A",
            "Basic Electrical, Electronics and Measurement Engineering": "A",
            "Physics for Information Science": "A",
            "Technical English": "A+"
        },
        fees: {
            "Total Fees": " 80,000 Rs",
            "Paid Fees": "60,000",
            "Pending Fees": "20,000"
        },
        other: {
            "Tution Fee": "30,000",
            "Exam Fee": "5,000",
            "Bus Fee": "25,000",
            "Hostel ": "No",
            "Room Rent": "---",
            "Mess Fee": "---",
            "Book Fee": "20,000",
            "Counselling": "Yes"
        }
    },
    {
        name: 'd',
        dob: "04-04-01",
        email: "d@gmail.com",
        ph: 4,
        dept: 'IT',
        reg: "890",
        img: "per4.jfif",
        result: {
            "Engineering Mathematics - II ": "A+",
            "Programming in C ": "A",
            "Environmental Science and Engineering": "O",
            "Basic Electrical, Electronics and Measurement Engineering": "A+",
            "Physics for Information Science": "B+",
            "Technical English": "O"
        },
        fees: {
            "Total Fees": " 1,00,000 Rs",
            "Paid Fees ": " 1,00,000 Rs ",
            "Pending Fees": "NIL"
        },
        other: {
            "Tution Fee": "50,000",
            "Exam Fee": "5,000",
            "Bus Fee": "25,000",
            "Hostel ": " No",
            "Room Rent": "---",
            "Mess Fee": "---",
            "Book Fee": "20,000",
            "Counselling": "No"
        }
    }

];
var regno = user.map(num => num.reg);
var pwd = user.map(pass => pass.dob);

function us() {

    const roll = document.getElementById("username").value;
    const pas = document.getElementById("password").value;
    var index = regno.indexOf(roll);
    if (roll !== "" && pas !== "") {
        if (regno.includes(roll)) {
            if (pas === pwd[index]) {
                localStorage.setItem("id", roll);
                document.cookie = roll;
                document.getElementById("full").style.display = "none"
                document.getElementById("wrgpas").style.display = "none"
                document.getElementById("wrgreg").style.display = "none";
                document.getElementById("strsuc").style.display = "block"
                return window.location.replace("index.html");
            }
            document.getElementById("full").style.display = "none"
            document.getElementById("wrgreg").style.display = "none"
            return document.getElementById("wrgpas").style.display = "block";
        }
        document.getElementById("full").style.display = "none"
        document.getElementById("wrgpas").style.display = "none"
        return document.getElementById("wrgreg").style.display = "block";
    }

    return document.getElementById("full").style.display = "block";
}
var id = localStorage.getItem("id");
var roll = user.map((id) => id.reg);
var index = roll.indexOf(id);

function main() {
    if (!id) {
        return window.location.replace("Page.html")
    }
    return false;
}

function logout() {
    window.localStorage.removeItem("id");
    return window.location.replace("Page.html")
}

function std() {
    document.getElementById("name").innerHTML = "Name" + " : " + user[index].name;
    document.getElementById("dept").innerHTML = "Department" + " : " + user[index].dept;
    document.getElementById("reg").innerHTML = "Registration Number" + " : " + user[index].reg;
    document.getElementById("dob").innerHTML = "Date Of Birth " + " : " + user[index].dob;
    document.getElementById("email").innerHTML = "Email Id" + " : " + user[index].email;
    document.getElementById("phone").innerHTML = "Phone Number" + " : " + user[index].ph;
    var image = document.createElement("img");
    image.src = user[index].img;
    document.getElementById("image").appendChild(image);
}

function res() {
    var res = Object.keys(user[index].result);
    var table = document.getElementById("res");
    res.forEach((sub, i) => {
        var row = table.insertRow(i + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = sub;
        cell2.innerHTML = user[index].result[sub];
    })
}

for(i=0:i<100:i++){
if(i===100) console.log("123")
}

function fee() {
    var valfee = Object.keys(user[index].fees);
    var fee = document.getElementById("fee");
    valfee.forEach((val) => {
        var cr = document.createElement("p");
        cr.innerHTML = val + "  : " + user[index].fees[val]
        fee.appendChild(cr);
    });
    other();
}
var other = () => {
    var fes = Object.keys(user[index].other);
    var det = document.getElementById("det");
    fes.forEach((tab, i) => {
        var rows = det.insertRow(i);
        var fcel = rows.insertCell(0);
        var scel = rows.insertCell(1);
        fcel.innerHTML = tab;
        scel.innerHTML = user[index].other[tab];
    })
}
