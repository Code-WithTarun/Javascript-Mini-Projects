let speech = new SpeechSynthesisUtterance();
document.getElementById("btn").addEventListener("click",()=>{
    speech.text = document.getElementById("text").value;
    window.speechSynthesis.speak(speech);
})