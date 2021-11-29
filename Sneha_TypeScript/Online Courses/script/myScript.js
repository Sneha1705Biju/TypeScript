var autoIncrementId = 1000;
var autoId = 100;
var UsernameStatus = false;
var UserageStatus = false;
var UserphoneStatus = false;
var User = /** @class */ (function () {
    function User(name, age, mob) {
        autoIncrementId++;
        this.userId = 'OC' + autoIncrementId;
        this.userName;
        this.userAge;
        this.userMobilenum;
    }
    return User;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(coursesName) {
        autoIncrementId++;
        this.courseId = 'CI' + autoId;
        this.courseName;
    }
    return CourseDetails;
}());
var UserList = new Array();
var CourseList = new Array();
var Username;
var Userage;
var Userphone;
var obj1 = new User(Username, Userage, Userphone);
function UserReg() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('userReg').style.visibility = 'visible';
}
function UserNamecall() {
    Username = document.getElementById('username').value;
    Userage = document.getElementById('userage').value;
    Userphone = document.getElementById('usermob').value;
    ageCheck();
    mobCheck();
    if (UsernameStatus == true && UserageStatus == true && UserphoneStatus == true) {
        alert("You have succesfully registered.");
        UserList.push(Username, Userage, Userphone);
        console.log(UserList);
    }
    else {
        alert("Please fill all the boxes");
    }
}
function ageCheck() {
    var Userage = document.getElementById('userage').value;
    var regx = /[0-1]{2}$/;
    if (regx.test(Userage)) {
        document.getElementById('userage').style.borderBlockColor = 'green';
        UsernameStatus = true;
        UserageStatus = true;
        UserphoneStatus = true;
    }
    else {
        document.getElementById('userage').innerHTML = 'Invalid';
        document.getElementById('userage').style.borderBlockColor = 'red';
        document.getElementById('userage').style.visibility = 'visible';
    }
}
function mobCheck() {
    var Userphone = document.getElementById('usermob').value;
    var regx1 = /[6-9][0-9]{9}$/;
    if (regx1.test(Userphone)) {
        document.getElementById('userage').style.borderBlockColor = 'green';
        UsernameStatus = true;
        UserageStatus = true;
        UserphoneStatus = true;
    }
    else {
        document.getElementById('userage').innerHTML = 'Invalid';
        document.getElementById('userage').style.borderBlockColor = 'red';
        document.getElementById('userage').style.visibility = 'visible';
    }
}
function UserLogin() {
    UserNamecall();
    document.getElementById('userReg').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    var availableUser = document.getElementById('availableUser');
    availableUser.innerHTML = "<h2>Available User</h2>";
    for (var i = 0; i < UserList.length; i++) {
        availableUser.innerHTML += "User Name : ".concat(UserList[i].userName, " | User Id : ").concat(UserList[i].userId, "<br>");
    }
}
// function idCheck(){
//     for(let i=1;i<UserList.length; i++){
//        UserList.innerHTML += $(UserList[i].userId)
//         UserList[i].userName
//     }
//     let autouserid=(document.getElementById('userId')as HTMLInputElement).value
//     if(autouserid==UserList[].userId){ 
//         Coursera();
//     }
// }
function Login() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('login').style.visibility = 'visible';
}
function Coursera() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('option').style.visibility = 'visible';
}
function AvailableCourse() {
    document.getElementById('option').style.display = 'none';
    document.getElementById('courses').style.visibility = 'visible';
}
function BackOption() {
    document.getElementById('courses').style.display = 'none';
    document.getElementById('option').style.display = 'block';
}
function Enroll() {
    document.getElementById('option').style.display = 'none';
    document.getElementById('enrolled').style.visibility = 'visible';
}
function OptionBack() {
    document.getElementById('enrolled').style.display = 'none';
    document.getElementById('option').style.display = 'block';
}
function GoBack() {
    document.getElementById('option').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}
