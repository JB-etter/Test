//tile divs
let tile1 = document.querySelector(".tile1");
let tile2 = document.querySelector(".tile2");
let tile3 = document.querySelector(".tile3");
let tile4 = document.querySelector(".tile4");

// 1. Declare a variable called fullName and assign a string with your name or a favorite celebrity.
let fullName="Lebron James";
// 2. Declare a variable called favNum and assign your favorite number as the value.
let favNum=23;
// 3. Declare a variable called coolImg and assign a string of an image address. Pick an image you enjoy!
let coolImg="https://media1.giphy.com/media/rBVM213ASKBIk/giphy.gif?cid=6c09b9528wwkq2hu510cu17i9z2tmyxcn5jlupgvkoq0jdin&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
// 4. Declare a variable called secondFavNum and assign a number as the value.
let secondFavNum=11;
// 5. Declare a variable called sumOfNums and assign a value of favNum added with secondFavNum.
let sumOfNums=secondFavNum+favNum;





// 6.  Once 1-5 are complete, uncomment the code below.

tile1.innerHTML = fullName;
tile2.innerHTML = favNum;
let image = document.createElement("img");
image.src = coolImg;
tile3.appendChild(image);
tile4.innerHTML = sumOfNums;
