// use local storage to manage cart data
const addToDb = id => {
    let bookingCart = {};

    //get the booking cart from local storage
    const storedCart = localStorage.getItem('booking-cart');
    if (storedCart) {
        bookingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = bookingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        bookingCart[id] = newQuantity;
    }
    else {
        bookingCart[id] = 1;
    }
    localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
}

const removeQuantityToDb = id => {
    let bookingCart = {};
    //get the booking cart from local storage
    const storedCart = localStorage.getItem('booking-cart');
    if (storedCart) {
        bookingCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = bookingCart[id];
    if (quantity) {
        const newQuantity = quantity - 1;
        bookingCart[id] = newQuantity;
    }
    localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
}

const addQuantityToDb = (id, value) => {
    let bookingCart = {};
    //get the booking cart from local storage
    const storedCart = localStorage.getItem('booking-cart');
    if (storedCart) {
        bookingCart = JSON.parse(storedCart);
    }
    const newQuantity = value;
    bookingCart[id] = newQuantity;

    localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
}

const getStoredCart = () => {
    let bookingCart = {};

    //get the booking cart from local storage
    const storedCart = localStorage.getItem('booking-cart');
    if (storedCart) {
        bookingCart = JSON.parse(storedCart);
    }
    return bookingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('booking-cart');
    if (storedCart) {
        const bookingCart = JSON.parse(storedCart);
        if (id in bookingCart) {
            delete bookingCart[id];
            localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
        }
    }
}

const deleteBookingCart = () => {
    localStorage.removeItem('booking-cart');
}

export {
    addToDb,
    removeQuantityToDb,
    addQuantityToDb,
    getStoredCart,
    removeFromDb,
    deleteBookingCart
}