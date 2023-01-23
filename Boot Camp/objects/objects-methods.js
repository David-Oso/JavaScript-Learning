let restaurant = {
    name: "ASE",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatLeft;
    },
    seatParty: function(partySize){
        this.guestCount += partySize;
    },
    removeParty: function(partySize){
        this.guestCount -= partySize;
    }
}

restaurant.seatParty(72);

console.log(restaurant.checkAvailability(4));

restaurant.removeParty(5);

console.log(restaurant.checkAvailability(4));
