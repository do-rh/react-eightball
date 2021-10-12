
function getRandomState(states) {
    const randInd = Math.floor(Math.random() * (states.length - 1));
    return states[randInd];
}

export { getRandomState };