# Switch (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #4** : Create an Array (Primitive) that functions CRUD Operation.
>
> This entire bucketlists idea I took from my own book, The logical is simple that, We have two arrays that emptied already, and createTasks is a function that will push if I had any bucket-list tasks, and controlTasks function will manipulate it, as long as I pass an arguement value.  

```js
// My Array Primitive Challenge Code Has Been Deployed Here. 

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



```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - Anbu

## References:
All thanks to Cyberdude Networks (Pvt) Ltd for their efforts towards on JavaScript in Tamil. I learnt many things about arrays through this playlist. So I don't wanted to list every single videos I watched here, Instead you can see everything one by one.

[CyberDude JavaScript Playlist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa)