let message = "supercalifracis";
message = message.length;

for ( let i = 1; i < message; i++ ) {
    if ( i === message / 2 ) {
        console.log('The loop has terminated...');
    }
    console.log(`Logging the number ${i}`);
}

console.log('The program continues...');