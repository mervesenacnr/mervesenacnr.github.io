document.getElementById("feedback-btn").addEventListener("click", function() {
    document.getElementById("feedback-popup").style.display = "block";
});

function submitFeedback() {
    let feedbackText = document.getElementById("feedback-text").value;
    if (feedbackText.trim() === "") return;

    let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbackList.push(feedbackText);
    localStorage.setItem("feedbacks", JSON.stringify(feedbackList));

    document.getElementById("feedback-text").value = "";
    loadFeedbacks();
}

function closeFeedback() {
    document.getElementById("feedback-popup").style.display = "none";
}

function loadFeedbacks() {
    let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
    let feedbackListContainer = document.getElementById("feedback-list");
    feedbackListContainer.innerHTML = "";

    feedbackList.forEach((feedback, index) => {
        let li = document.createElement("li");
        li.innerHTML = feedback + `<button onclick="deleteFeedback(${index})">X</button>`;
        feedbackListContainer.appendChild(li);
    });
}
function deleteFeedback(index) {
    let feedbackList = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbackList.splice(index, 1);
    localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
    loadFeedbacks();
}
window.onload = loadFeedbacks;