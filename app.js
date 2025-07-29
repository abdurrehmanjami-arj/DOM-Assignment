// Question No 1. Select a paragraph with id "message" and change its text to "Welcome!".

// const para = document.querySelector("#para");
// para.innerHTML = "Welcome!"

// Question No 2. Get the value from an input with id "nameInput" and display it inside a div with id
// "result".

// const nameInput = document.querySelector("#nameInput");
// const result = document.querySelector("#result");
// function showResult() {
//   result.innerHTML = nameInput.value;
// }

// Question No 3. When a button is clicked, change the background color of a section with id
// "container" to light blue.

// const container = document.querySelector("#container");

// function changeColor() {
//   container.style.backgroundColor = "lightblue";
// }

// Question No 4. Select a heading (h1) with id "mainTitle" and change its color to red.

// const mainTitle = document.querySelector("#mainTitle")
// mainTitle.style.color = "red"

// Question No 5. Get the number from an input with id "num1" and show it inside a paragraph with id
// "output".

// const input = document.querySelector("#num1");
// const output = document.querySelector("#output");

// function generate() {
//   output.innerHTML = input.value
// }

// Question No 6. Select a button with class "submit-btn" and log "Button Clicked" to the console
// when it's clicked.

// const submitBtn = document.querySelector(".submit-btn");
// function showConsole() {
//   console.log("Welcome to Class");
// }

// Question No 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".

// const firstNumber = document.querySelector("#first");
// const secondNumber = document.querySelector("#second");
// const sumResult = document.querySelector("#sum");

// function sumNumbers() {
//   let total = +firstNumber.value + +secondNumber.value;
//   sumResult.innerHTML = total;
// }

// Question No 8. Change the text of a paragraph with class "description" to "Updated
// successfully".

// const description = document.querySelector(".description");
// function changePara() {
//   description.innerHTML = "Updated successfully";
// }

// Question No 9. Select a div with id "box" and set its width to 200px and background color to green.

// const setBoxWidth = document.querySelector("#box");
// setBoxWidth.style.width = "200px";
// setBoxWidth.style.height = "200px";
// setBoxWidth.style.backgroundColor = "green";

// Question No 10. Get the email entered in an input with id "email" and print it in the console.

// const email = document.querySelector("#email");
// function showEmail() {
//   console.log(email.value);
// }

// Question No 11. Select a paragraph and update its font size to 24px.

// const changeFontSize = document.querySelector("#chnage-font-size")
// changeFontSize.style.fontSize = "24px"

// Question No 12. On button click, get a name from input "fullName" and set the text "Hello,
// [name]" inside a div "greeting".

// const fullName = document.querySelector("#full-name")
// const greeting = document.querySelector("#greeting")

// function showFullName (){
//   greeting.innerHTML = "Hello, " + fullName.value
// }

// Question No 13. Select an image with id "profilePic" and change its src to another image URL.

// const profilePic = document.querySelector("#profilePic");
// function changePicture() {
//   profilePic.src =
//     "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg";
//   profilePic.style.width = "300px";
//   profilePic.style.height = "300px";
// }

//Question No 14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll
// need querySelectorAll for multiple)

// let changeParaColor = document.querySelectorAll(".highlight");
// for (let i = 0; i < changeParaColor.length; i++) {
//   changeParaColor[i].style.color = "orange";
// }

// Question No 15. Select a checkbox with id "agree" and check whether it is checked or not, then display
// "Agreed" or "Not Agreed" in a paragraph.

// const checkbox = document.getElementById("agree");
// const statusText = document.getElementById("statusText");

// function checkAgree() {
//   if (checkbox.checked) {
//     statusText.innerHTML = "Agreed";
//   } else {
//     statusText.innerHTML = "Not Agreed";
//   }
// }

// Question No 16. Get the selected value from a dropdown (select element) with id "options" and display
// it in "selectedValue" span.

// const selectOption = document.querySelector("#option");
// const showOption = document.querySelector("#selectedValue");
// function showSelectedValue() {
//   showOption.innerHTML = selectOption.value;
// }

// Question No 17. When a button is clicked, show the current date and time inside a paragraph with id
// "dateTime".

// const dateTime = document.querySelector("#dateTime");

// function getDateTime() {
//   const date = new Date();
//   dateTime.innerHTML = date.toDateString();
// }

// Question No 18. Select a paragraph with id "togglePara" and hide it (set display: none).

// const togglePara = document.querySelector("#togglePara");
// function hidePara() {
//   if (togglePara.style.display === "none") {
//     togglePara.style.display = "block";
//   } else {
//     togglePara.style.display = "none";
//   }
// }

// Question No 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
// else "Not Eligible" in a span.

// const age = document.querySelector("#age")
// const showMessage = document.querySelector("#showMessage")

// function displayAge (){
//   if(age.value >= 18){
//     showMessage.innerHTML = "Eligible"
//   } else {
//     showMessage.innerHTML = "Not Eligible"
//   }
// }

// Question No 20. When a button is clicked, clear the value of an input with id "searchBox".

// const searchBox = document.querySelector("#searchBox");
// function hideInput() {
//   searchBox.value = "";
// }
