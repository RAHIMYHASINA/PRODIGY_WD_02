// Variables to track time
let timerInterval;
let running = false;
let startTime = 0;
let elapsedTime = 0;

// Function to start/stop the stopwatch
function startStop() {
    const startStopButton = document.getElementById("startStop");
    if (!running) {
        startStopButton.textContent = "Pause";
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        running = true;
    } else {
        startStopButton.textContent = "Start";
        elapsedTime = Date.now() - startTime;
        clearInterval(timerInterval);
        running = false;
    }
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = "<h2>Lap Times:</h2>";
}

// Function to update the time display
function updateTime() {
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("display").textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Function to pad numbers to two digits
function pad(number) {
    return number.toString().padStart(2, '0');
}

// Function to record lap times
function recordLap() {
    if (!running) return;

    const lapTime = document.getElementById("display").textContent;
    const lapContainer = document.getElementById("laps");

    const lapElement = document.createElement("div");
    lapElement.classList.add("lap-time");
    lapElement.textContent = lapTime;

    lapContainer.appendChild(lapElement);
}
