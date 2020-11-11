export const theatreService = {
    getTheatre,
    book
}

function getTheatre() {
    return JSON.parse(JSON.stringify(THEATRE));
}

function book(seat) {
    const batch = THEATRE[seat.rowIdx][seat.batchIdx];
    const idx = batch.findIndex(currSeat => currSeat.id === seat.id);
    batch[idx].isAvailable = false;

}

const THEATRE = [];

const theatre1Template = [
    { rowBuild: [3, 12, 3], priceDiff: -5 },
    { rowBuild: [3, 12, 3], priceDiff: -3 },
    { rowBuild: [4, 12, 5], priceDiff: -2 },
    { rowBuild: [4, 12, 4], priceDiff: -1 },
    { rowBuild: [5, 12, 6], priceDiff: 0 },
    { rowBuild: [6, 12, 7], priceDiff: 0 },
    { rowBuild: [6, 0, 7], priceDiff: 0 },
    { rowBuild: [5, 0, 7], priceDiff: 3 },
    { rowBuild: [0, 0, 7], priceDiff: 5 }
]

createTheatre(10, theatre1Template);

function createTheatre(defaultPrice, template) {
    template.forEach(row => {
        THEATRE.push(row.rowBuild.map(seatBatch => {
            return _createSeats(seatBatch, defaultPrice + row.priceDiff);
        }))
    })
}

function _createSeats(numOfSeats, price) {
    if (numOfSeats < 0) return;
    let seats = [];
    while (numOfSeats > 0) {
        seats.push(_createSeat(price));
        numOfSeats--;
    }
    return seats;
}

function _createSeat(price = 0) {
    return {
        id: _makeId(),
        isAvailable: true,
        price
    }
}

function _makeId(length = 4) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}