// Creating lists of Users via Arrays of Objects. //! (Done).
// finding with userInput = from the Array of Objects.//! (Done).
// If it's True Login Authentication Successful. //! (Done).

//* New Feature
// If username is successful and password wrong // TODO (Pending);

const admins = [
    { user: "shajid", userName: "saji", password: "123" },
    { user: "Anbu", userName: "rocky", password: "456" },
    { user: "Kai Mikazuki", userName: "kai", password: "789" },
  ];
  
  const userPrompt = prompt("Enter your User ID? ");
  const passPrompt = prompt("Enter your Password? ");
  
  //***********************************************************************************/
  //! Constructor Function to Create An Object. (There is a drawback)
  
  // function NewRegistrations(user,userName,password){
  //     this.user = user;
  //     this.userName = userName;
  //     this.password = password;
  // }
  
  // const abirami = new NewRegistrations("Abirami", "abi", "123");
  // admins.push(abirami);
  // console.log(admins);
  
  //***********************************************************************************/
  
  //! to Create New Users & Pushing to Admins Collections
  
  function newUsers(user, userName, password) {
    admins.push({ user: user, userName: userName, password: password });
  }
  
  const abi = newUsers("Abirami", "abi", "123");
  
  //***********************************************************************************/
  
  //! Finding the value based on the User Prompt and finding on the Admin Array.
  //! If it's true then it will show you the successful login authentication.
  
  const findAdmins = admins.find(function (value) {
    return value.userName === userPrompt && value.password === passPrompt;
  });
  
  if (findAdmins) {
    console.log(
      `%c Login Authentication for ${userPrompt} is successful`,
      "background: #222; color: #bada55"
    );
  } else {
    console.log(
      `%c Make sure to check your ID & Password.`,
      "background: #FF0000; color: #bada55"
    );
  }
  