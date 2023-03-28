const chat = document.querySelector('.chat-widget')
const input = document.getElementById('chat-widget__input')

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})

