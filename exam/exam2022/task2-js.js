class Hotel {
    constructor(name, totalRooms, bookedRooms, hasPool, hasGym) {
        this.name = name;
        this.totalRooms = totalRooms;
        this.bookedRooms = bookedRooms;
        this.hasPool = hasPool;
        this.hasGym = hasGym;
    }

    availableRooms() {
        return this.totalRooms - this.bookedRooms;
    }
}