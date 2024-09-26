const core = require('@actions/core');

function run() {
    let firstNumber = core.getInput('number1');
    let secondNumber = core.getInput('number2');

    let result = parseInt(firstNumber) + parseInt(secondNumber);
    core.notice('The result is: ' + result);
    core.setOutput('result', result);
}

run();