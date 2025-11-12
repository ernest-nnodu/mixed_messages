
const messageGenerator = {
    signInfo: ['star', 'moon', 'sun', 'comet', 'water', 'earth'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck', 'Amazing luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one', 'Be silent', 'Try and meditate']
};

const randomNum = function() {
    return Math.floor(Math.random() * 6);
}

const randomMessage = function(range) {
    let message = [];

    for(let prop in messageGenerator) {
        let index = randomNum(messageGenerator[prop].length);

        switch (prop) {
            case 'signInfo':
                message.push(`Your sign right now is a ${messageGenerator[prop][index]}`);
                break;
            case 'fortuneOutput':
                message.push(`You are having ${messageGenerator[prop][index]}`);
                break;
            case 'advice':
                message.push(`You should ${messageGenerator[prop][index]}`);
                break;
                default:
                    message.push('There is not enough info.');
        }

    }
    return message.join('\n');
}

console.log(randomMessage());
