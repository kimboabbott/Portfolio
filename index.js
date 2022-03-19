function popUp() {
    let character = prompt("Which character is your favorite?");

    if (character !== 'Paris' && character !== 'paris') {
        alert("Try again!")
    } else if (character === 'Paris' || character === 'paris') {
        alert("Correct!")
    }
}

function popup() {
    let boyfriend = prompt("Jess?Logan?Dean?");
    if (boyfriend !== "Jess" && boyfriend !== "jess") {
        alert("You are wrong. Dean is a needy child, and Logan is a spoiled brat.")
    } else if (boyfriend === "Jess" || boyfriend === "jess") {
        alert("You have good taste in men")
    }
}
