function convert() {
    let input = document.getElementById("textinput").value;
    if (input.trim() == "") {
        alert("Enter text  first");
        return;
    }
    let speech = new SpeechSynthesisUtterance(input);
    window.speechSynthesis.speak(speech);
}