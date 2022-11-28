import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input score: ', (scoreText) => {
    const score = parseFloat(scoreText);

    
    rl.close();
});