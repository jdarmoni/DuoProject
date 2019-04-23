const log = document.getElementById('translateSubmit');

input.addEventListener('keypress', logKey);

function logKey(e) {
    debugger
    log.textContent += ` ${e.code}`;
}