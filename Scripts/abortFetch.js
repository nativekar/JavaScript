//Assuming the fetch(url) call takes more than 1 minute - task is to abort fetch after a minute has elapsed

const controller = new AbortController();
const { signal } = controller;

const getData = () => {
console.log(`Starting getData()`);
startTimer();
const url = `www.dummyurl.com/users=10`;
fetch(url, { signal }, console.log(`Starting fetch`)) .then(response => {
console.log(`Request 1 is complete!`);
}).catch(e => {
    console.warn(`Fetch 1 error: ${e.message}`);
});

}

function startTimer () {
console.log(`Starting timer()`);
setTimeout(function(){
controller.abort();
console.log(`Controller Aborted`);
}, 60000);
}

getData();
