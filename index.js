const names = ["Harry","Devin","Mary"]
const occupations = ["Developer","Cook","Doctor"]
const prices = [23,45,75]
const freelancers=[{
    name: "Harry", price: 23, occupation: "Developer"
}]

const maxList = 6;
function addFreelancers(){
     const name = names[Math.floor(Math.random() *names.length)]
// generate a random name from the names array using math.random

// generate a random occupation from the occupations array

const occupation = "Cook";
freelancers.push ({occupation,name});
}
// generate a random price from the prices array

// add these as an object into the freelances array
// freelancers.push({ name, price, occupation})

//to stop the interval from going on forever
    if(freelancers.length >= maxList) {
        clearInterval((addFreelancerIntervalId));
    }
}

function calculateSum() {
    let sum = 0;
    for(let freelancer of freelancers) {
        sum += freelancer.price;
    }
    return sum;
}
function updateAverage() {
    // update the current average freelancer price
    const sum = caculateSum();
    // find the average, sum/number of freelancers store it in vaiable 
    // crate a averageItem variable that contains the 
    // queried docment element #average
const average = sum /freelancers.length;
    const averageElement = document.querySelector("#average");
    //set the text content to be the actual average
    // averageElement.textContent =
    return averageElement;
}

function render() {
    const list = document.querySelector("#freelancer")
    const listElements = freelancers.map(item => {
        const listElement = document.createElement("li")
        listElement.textContent = 
        `${item.name}-${item.occupation}-$${item.price}`
     return listElement
    })
      list.replaceChildren(...listElements)
}
render()

const addFreelancerIntervalId = setInterval(()=>{
addFreelancers()
updateAverage()
render()
},2000)

