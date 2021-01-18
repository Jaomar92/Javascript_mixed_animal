const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your first Animal ? ", function(firstAni) {
    rl.question("What is your second Animal ? ", function(secondAni) {
        rl.question("What is your 3rd Animal?", function(thirdAni){
            console.log(' ');
            console.log(`Your first animal is what you aspire to be the ${firstAni}.`);
            console.log(' ');
            console.log(`Your second animal is what others see you ${secondAni}`);
            console.log(' ');
            console.log(`and your last animal is what you preceive yourself as ${thirdAni}`);
            rl.close();
        });
    });

});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});