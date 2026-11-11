const calculateBtn =
document.getElementById("calcButton");

calculateBtn.addEventListener("click", function(){

    let cost =
    Number(document.getElementById("cost").value);

    let travelers =
    Number(document.getElementById("travelers").value);

    if(cost > 0 && travelers > 0){

        let total = cost * travelers;

        document.getElementById("totalCost").textContent =
        "Total Trip Cost: $" + total;

    }
    else{

        document.getElementById("totalCost").textContent =
        "Please enter valid numbers.";

    }

});

const destinations = [
    "New York",
    "Los Angeles",
    "Paris",
    "Venice"
];

const surpriseBtn =
document.getElementById("surpriseButton");

surpriseBtn.addEventListener("click", function(){

    const randomDestination =
    destinations[Math.floor(Math.random() * destinations.length)];

    document.getElementById("surpriseResult").textContent =
    ` Your surprise destination is: ${randomDestination}!`;

});
