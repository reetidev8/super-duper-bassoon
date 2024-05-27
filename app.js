const quotes = [
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Your limitation—it’s only your imagination. - Unknown",
    "It is never too late to be what you might have been. — George Eliot", 
    "Hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it. — Taylor Swift",
    "You define beauty yourself, society doesn’t define your beauty. — Lady Gaga"
];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', toggleTaskCompletion);
    taskList.appendChild(newTask);

    taskInput.value = '';
}

function toggleTaskCompletion(event) {
    event.target.classList.toggle('completed');
}

function generateQuote() {
    const quoteText = document.getElementById('quote-text');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}
