document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('request-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            // Здесь можно добавить отправку данных на сервер или обработку
            formResponse.textContent = 'Спасибо за вашу заявку, ' + name + '!';
            form.reset();
        } else {
            formResponse.textContent = 'Пожалуйста, заполните все поля.';
        }
    });
});
