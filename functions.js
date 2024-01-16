const usergroup = [
  {
    userID: 1234,
    firstName: "John",
    lastName: "Doe",
    isActive: true,
  },
  {
    userID: 1235,
    firstName: "Jane",
    lastName: "Doe",
    isActive: true,
  },
  {
    userID: 1236,
    firstName: "Johnny",
    lastName: "Depp",
    isActive: true,
  },
  ];


  function print(user){
    console.log(user)
  };
  



function isActiveUser(user) {
  if (user.status === true){
  console.log(true);
  return true;
} else { 
  console.log(false);
  return false;
}
};

function getFullName(user) {
  if(user.status === true) {
    return true;
    } else {
      return false;
  }
};


