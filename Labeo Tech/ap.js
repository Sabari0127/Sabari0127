// Wait for the DOM to be fully loaded before attaching events
document.addEventListener('DOMContentLoaded', function () {
// Function to toggle mobile menu visibility
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden'); // Toggle visibility of the mobile menu
}
    // Function to toggle the visibility of the chatbot window
    window.toggleChatbot = function() {
        const chatbot = document.getElementById('chatbot');
        chatbot.classList.toggle('hidden');  // Toggle between visible and hidden
    };
    window.toggleChatbot = function() {
        console.log('Toggle button clicked');
        const chatbot = document.getElementById('chatbot');
        chatbot.classList.toggle('hidden');
    };
    
    // Function to close the chatbot window
    window.closeChatbot = function() {
        const chatbot = document.getElementById('chatbot');
        chatbot.classList.add('hidden');  // Hide the chatbot
    };

    // Function to send the user's message and simulate a response from the bot
    window.sendMessage = function() {
        const userInput = document.getElementById('user-input');
        const chatWindow = document.getElementById('chat-window');

        if (userInput.value.trim() !== '') {  // If there's some text entered
            // Create user message element
            const userMessage = document.createElement('div');
            userMessage.classList.add('user-message', 'p-2', 'bg-teal-400', 'rounded-lg', 'mb-2');
            userMessage.textContent = userInput.value;
            chatWindow.appendChild(userMessage);  // Append user message to chat window

            // Simulate bot response after a short delay
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.classList.add('bot-message', 'p-2', 'bg-gray-800', 'rounded-lg', 'mb-2');
                botMessage.textContent = "Thank you for your message!";  // Bot's response
                chatWindow.appendChild(botMessage);  // Append bot message to chat window
                chatWindow.scrollTop = chatWindow.scrollHeight;  // Auto-scroll to bottom
            }, 1000);  // 1-second delay for the bot's response

            // Clear input field after sending the message
            userInput.value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;  // Auto-scroll to bottom
        }
    };
});
