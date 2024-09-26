const core = require('@actions/core');

function run() {
    let firstNumber = core.getInput('firstNumber');
    let secondNumber = core.getInput('secondNumber');

    let result = parseInt(firstNumber) + parseInt(secondNumber);
    core.notice('The result is: ' + result);
    core.setOutput('result', result);
}

run();