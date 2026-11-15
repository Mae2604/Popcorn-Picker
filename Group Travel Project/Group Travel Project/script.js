const calculateBtn =
document.getElementById("calculator");

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

document.getElementById("nyButton").addEventListener("click", function(){
    document.getElementById("nyInfo").textContent = "Best time to visit: April to June or September to November.";
});

document.getElementById("laButton").addEventListener("click", function(){
    document.getElementById("laInfo").textContent = "Best time to visit: March to May or September to November.";
});

document.getElementById("parisButton").addEventListener("click", function(){
    document.getElementById("parisInfo").textContent = "Best time to visit: April to June or September to October.";
});

document.getElementById("veniceButton").addEventListener("click", function(){
    document.getElementById("veniceInfo").textContent = "Best time to visit: April to May or September to October.";
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