

// function f() {}
// const f = () => {}


// const sum = function (n1, n2){
//     return n1+n2
// }

const sum2 = (n1, n2) =>()=> n1* n2;
console.log(10,20);

function findUserAndCallBack(id, cb) {
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }
  
  findUserAndCallBack(1, function (user) {
    console.log("user:", user);
  })

  function findUserAndCallBack(id, cb) {
    setTimeout(function () {
      console.log("waited 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      cb(user);
    }, 100);
  }
  
  findUserAndCallBack(1, function (user) {
    console.log("user:", user);
  });
  
