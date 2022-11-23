const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('What is an activity you like doing? ', (activity) => {
        rl.question('What do you listen to while doing that? ', (music) => {
            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
                rl.question('What is your favourite thing to eat for that meal? ', (food) => {
                    rl.question('Which sport is your absolute favourite? ', (sport) => {
                        console.log(`${name} likes ${activity} while listening to ${music}. ${name}'s favourite meal is ${meal} and loves ${food}. ${sport} is an absolute favourite sport. `);
                        rl.close();
                    });
                });
            });
        });
    });
});