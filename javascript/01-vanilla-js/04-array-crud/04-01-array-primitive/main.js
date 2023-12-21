console.log(
    "%c My Bucket List 2024",
    "font-weight: bold; text-align: center; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
  );
  
  const myBucketLists = [];
  const completedBucketLists = [];
  
  function createTasks(newTasks) {
    let tasks = myBucketLists.push(newTasks);
    return tasks;
  }
  
  // Create a New Element
  createTasks("Watching Aurora Skies");
  createTasks("Buying A Warren Table");
  createTasks("Garden With Lots of Butterflies");
  
  // Updating an Existing Element
  myBucketLists[0] = "Watching Aurora Skies in Switzerland";
  
  // Reading The Primitive Array
  function showCurrentTasks(tasks) {
    for (let i = 0; i < myBucketLists.length; i++) {
      console.log(`${i + 1}/ ${tasks[i]}`);
    }
  }
  
  // Manipulate The Array Using This Function.
  // Either I Can Remove or Can Shift To Another Array From Here.
  
  function controlTasks(index) {
    if (index >= 0 && index < myBucketLists.length) {
      console.log(`"${myBucketLists[index]}" is completed! 💪🏽`);
      completedBucketLists.push(myBucketLists.splice(index, 1)[0]);
      // myBucketLists.splice(index, 1) //! To Remove the index.
    } else {
      console.error(`Sorry, Invalid Number. Enter The Correct Index Number`);
    }
  }
  
  showCurrentTasks(myBucketLists);
  controlTasks(0); // 2/1
  console.log(completedBucketLists);
  