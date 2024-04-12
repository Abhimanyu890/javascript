// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "Abhimanyu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abhiamhyu@gamil.com",
    fullname: {
       userfullname : {
            firstname : "ABhimanyu",
            lastname:"Singh"

        }
    }
}
console.log(regularUser.fullname.userfullname);

 const obj1 = {1: "a" , 2: "b"}
 const obj2 ={3: "a" , 4: "b"}

//  const obj3 = {  obj1,  obj2 }   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign( {} , obj1, obj2)   // output = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1 , ...obj2}   // spread operator
 console.log(obj3);

 const users =[
    {
        id: 1,
        email: "abhiamyu@yahoo.com",
    },
    {
        id: 1,
        email: "abhiamnyu@yahoo.com",
    }
 ]

 users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLogged'));   // to check weather this is avilable or nor ( gives boolean value)


const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructer: "Abhimanyu"
}

// course.courseInstructer

 const {courseInstructer} = course 

 console.log(courseInstructer);

//  {
//     name: "Abhiamnyu",
//     coursename: "JS in hindi",
//     price: "free"
//  }

