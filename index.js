//Adding the event listener to the sortHalves form
document.getElementById("sortHalves").addEventListener("submit", sortHalves);

// Function is called when the user clicks the button Split and Sort. This will take the values that the user inputted in the text box and
// split it in half. Then it will sort the first half of numbers in ascending order and the second half of numbers in descending order.
function sortHalves(event) {
    event.preventDefault();

    //Declares variable for storing user inputed data
    var input = document.getElementById("userInput").value;
    //Splits the string at the commas storing each value between commas in a seperate index of an array
    var inputArray = input.split(",");
    //Calculates what half of the array is
    var half = Math.ceil(inputArray.length /2);

    //trim whitespace around each element
    for (let i= 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].trim();
    }

    //Creates a separate array of the first half using slice method
    var firstHalf = inputArray.slice(0, half);
    //Creates a separate array of the second half using slice method again
    var secondHalf = inputArray.slice(-half);

    //use for loops to do a bubble sort on the first half
    for (let i = 0; i < firstHalf.length - 1; i++) {
        for (let j = 0; j < firstHalf.length - 1; j++) {
            if (firstHalf[j] > firstHalf[j+1]) {
                var k = firstHalf[j];
                firstHalf[j] = firstHalf[j+1];
                firstHalf[j+1] = k;
            }
        }
    }

    //use for loops to do a bubble sort on the second half
    for (let i = 0; i < secondHalf.length - 1; i++) {
        for (let j = 0; j < secondHalf.length - 1; j++) {
            if (secondHalf[j] < secondHalf[j+1]) {
                var k = secondHalf[j];
                secondHalf[j] = secondHalf[j+1];
                secondHalf[j+1] = k;
            }
        }
    }


    //Displays the results in their own paragraphs
     document.getElementById("displayInput").innerHTML = "The numbers inputed where the following: " + inputArray;
     document.getElementById("displayFirstHalf").innerHTML = "The first half of the inputed numbers in ascending order are: " + firstHalf;
     document.getElementById("displaySecondHalf").innerHTML = "The second half of the inputed numbers in descending order are: " + secondHalf;
    

}