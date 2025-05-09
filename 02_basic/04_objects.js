//const tinderUser = new object()//sigleton objects
const tinderUser = {}// non singleton object

tinderUser.id = "123abc"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullame:{
            firstname: "John",
            lastname: "Doe"
        }
    }
}
//console.log(regularUser.fullname.userFullame.fullname);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}//object spread method
//console.log(obj3);

const users = [
    {
        id: 1,
        email:"ali@hotmail.com"
    },
    {
        id: 1,
        email:"ali@hotmail.com"
    },
    {
        id: 1,
        email:"ali@hotmail.com"
    },
]
users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLogged'));

// object de-structure
const course = {
    name: "javascript",
    price: "999",
    courseInsructor:"ali"
}
//course.name

const {name:fullname} = course
console.log(fullname);

// API concepts

// {
//     "name": "javascript",
//     "price": "999",
//     "courseInsructor":"ali"
// }

[
    {},
    {},
    {}
]