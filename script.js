// Получаем элементы страницы
const showVideoBtn = document.getElementById('showVideoBtn');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');

// Добавляем обработчик события на кнопку
showVideoBtn.addEventListener('click', () => {
    // Показываем видео
    videoContainer.style.display = 'block';
    
    // Воспроизводим видео
    video.play();
    
    // После завершения видео скрываем его
    video.onended = () => {
        videoContainer.style.display = 'none';
    };
});