document.addEventListener("keydown", (event) => {
    const welcome = document.getElementById("welcome");
    const generator = document.getElementById("generator");

    let key = event.key;
    let keyCode = event.keyCode;
    let location = getLocationDescription(event);
    let code = event.code;

    document.getElementById("eventKey").textContent = key;
    document.getElementById("eventKeyCode").textContent = keyCode;
    document.getElementById("eventLocation").textContent = location;
    document.getElementById("eventCode").textContent = code;

    generator.style.display = "block";
    welcome.style.display = "none";
});

function getLocationDescription(event) {
    const keyWithLocation = ['Alt', 'Shift', 'Control', 'Enter', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'NumpadEnter', 'NumpadAdd', 'NumpadSubtract', 'NumpadMultiply', 'NumpadDivide', 'NumpadDecimal'];
    
    if (keyWithLocation.includes(event.code)) { 
        switch (event.location) {
        case 0:
            return "Standard";
        case 1:
            return "Left";
        case 2:
            return "Right";
        default:
            return "Unknown";
    }
    }
    else {
        return "";
    }
}
    
