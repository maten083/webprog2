import FormApp from './app/Form/Form.js';

document.addEventListener('DOMContentLoaded', function() {
    let application;
    document.getElementById('form-app')?.addEventListener('click', createApp);

    function createApp() {
        if (application) {
            console.log(application);
            application.destroy();
        }
    
        const target = document.getElementById('app');
        application = new FormApp({
            statBarTarget: document.getElementById('status'),
            target: target
        });
    }
});
