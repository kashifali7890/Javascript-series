// IIFE Immidiately Invoked Function Expression
// to avoid global variable pollution
(function chai () {
    //named IIFE
    console.log("Hello, World!");
}) (); // to join two IIFE

( (name) => {
    console.log(`DB Connected ${name}`);
} )("ali")