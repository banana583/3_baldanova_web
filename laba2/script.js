//мигающий текст внизу
setInterval(function() {
    const footerText = document.querySelector('footer p');
    footerText.style.color = footerText.style.color === 'orange' ? 'black' : 'orange';
}, 500);

//перенаправление на YouTube при клике на кнопку
const buyButton = document.getElementById('cta-button');
if (buyButton) {
    buyButton.addEventListener('click', function() {
        window.location.href = "https://www.youtube.com/watch?v=KTfyGVI9Yxc";
    });
}