class Hotel {
    constructor(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
    }

    checkAvailability() {
        return this.rooms - this.booked;
    }
}
/*
// Set up the object using literal notation
let hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77
};
  
hotel.gym = true;
hotel.pool = false;
delete hotel.booked;
*/

let hotel1 = new Hotel('Park West', 60, 23);
hotel1.gym = true;
hotel1.pool = false;
hotel1.costs = [
    {type: 'Honeymoon Suite', price: 900},
    {type: 'Suite', price: 400},
    {type: 'Double', price: 300},
    {type: 'Single', price: 200},
]

let hotel2 = new Hotel('Park South', 120, 74);


// Update the HTML
let elAvailability = document.querySelector('#availableRooms');
elAvailability.textContent = `Available rooms: ${hotel1.checkAvailability()}`

let elName = document.querySelector('#hotelName'); // Get element
elName.textContent = hotel1.name;                   // Update HTML with property of the object

let elPool = document.querySelector('#pool');      // Get element
elPool.className = hotel1.pool;                     // Update HTML with property of the object

let elGym = document.querySelector('#gym');        // Get element
elGym.className = hotel1.gym;                       // Update HTML with property of the object

setCosts('hotel1', hotel1.costs);

function setCosts(hotelId, costs) {
    for (let i = 0; i < costs.length; i++) {
        let elRoom = document.querySelector(`#${hotelId}-${i}`);
        elRoom.textContent = `${costs[i].type}: ${costs[i].price}`;
    }
}