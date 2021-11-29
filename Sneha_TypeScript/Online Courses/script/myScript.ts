
let autoIncrementId=1000;
let autoId=100;
let UsernameStatus=false
let UserageStatus=false
let UserphoneStatus=false
class User{
    userId:string;
    userName:string;
    userAge: number;
    userMobilenum:number;

    constructor(name:string, age:number, mob:number){
        autoIncrementId++;
        this.userId='OC'+ autoIncrementId
        this.userName;
        this.userAge;
        this.userMobilenum;
    }
}

class CourseDetails{
    courseId:string;
    courseName:string;

    constructor(coursesName:string){
        autoIncrementId++;
        this.courseId='CI' +autoId
        this.courseName;
    }
}

let UserList=new Array<User>()
let CourseList=new Array<CourseDetails>()

let Username
let Userage
let Userphone
let obj1= new User(Username, Userage, Userphone)
function UserReg(){
    
    (document.getElementById('homePage') as HTMLDivElement).style.display='none';
    (document.getElementById('userReg') as HTMLDivElement).style.visibility='visible';

    
}

function UserNamecall(){
    
   
        Username=(document.getElementById('username') as HTMLInputElement).value
        Userage=(document.getElementById('userage') as HTMLInputElement).value
        Userphone=(document.getElementById('usermob') as HTMLInputElement).value
   ageCheck()
   mobCheck()
    if(UsernameStatus==true && UserageStatus==true && UserphoneStatus==true){
        alert("You have succesfully registered.")
       
        UserList.push (Username, Userage, Userphone);
   console.log(UserList)
    }
    else{
        alert("Please fill all the boxes")
       
    }
    
}

function ageCheck(){
    let Userage=(document.getElementById('userage') as HTMLInputElement).value
    let regx=/[0-1]{2}$/
    if(regx.test(Userage)){
        document.getElementById('userage').style.borderBlockColor='green'
        UsernameStatus=true
        UserageStatus=true
        UserphoneStatus=true
    }
    else{
        document.getElementById('userage').innerHTML='Invalid'
        document.getElementById('userage').style.borderBlockColor='red'
        document.getElementById('userage').style.visibility='visible'
        
    }
}

function mobCheck(){
    let  Userphone=(document.getElementById('usermob') as HTMLInputElement).value
    let regx1=/[6-9][0-9]{9}$/
    if(regx1.test(Userphone)){
        document.getElementById('userage').style.borderBlockColor='green'
        UsernameStatus=true
        UserageStatus=true
        UserphoneStatus=true
    }
    else{
        document.getElementById('userage').innerHTML='Invalid'
        document.getElementById('userage').style.borderBlockColor='red'
        document.getElementById('userage').style.visibility='visible'
    }
}
function UserLogin(){
    UserNamecall();
    
    (document.getElementById('userReg') as HTMLDivElement).style.display='none';
    (document.getElementById('homePage')as HTMLDivElement).style.display='block';
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;
    availableUser.innerHTML = "<h2>Available User</h2>";


    for (let i = 0; i < UserList.length; i++) {

        availableUser.innerHTML += `User Name : ${UserList[i].userName} | User Id : ${UserList[i].userId}<br>`;
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


function Login(){
    (document.getElementById('homePage') as HTMLDivElement).style.display='none';
    (document.getElementById('login') as HTMLDivElement).style.visibility='visible';
    
}
function Coursera(){
    (document.getElementById('login') as HTMLDivElement).style.display='none';
    (document.getElementById('option') as HTMLDivElement).style.visibility='visible';
}
function AvailableCourse(){
    (document.getElementById('option') as HTMLDivElement).style.display='none';
    (document.getElementById('courses') as HTMLDivElement).style.visibility='visible';
}
function BackOption(){
    (document.getElementById('courses') as HTMLDivElement).style.display='none';
    (document.getElementById('option') as HTMLDivElement).style.display='block';
}
function Enroll(){
    (document.getElementById('option') as HTMLDivElement).style.display='none';
    (document.getElementById('enrolled') as HTMLDivElement).style.visibility='visible';
}
function OptionBack(){
    (document.getElementById('enrolled') as HTMLDivElement).style.display='none';
    (document.getElementById('option') as HTMLDivElement).style.display='block';
}
function GoBack(){
    (document.getElementById('option') as HTMLDivElement).style.display='none';
    (document.getElementById('homePage') as HTMLDivElement).style.display='block';
}
