window.onload = () => {
    const btn = document.getElementById('btn');
    const topSecretText = document.getElementById('topSecretText');
    btn.addEventListener('click', () => {
        topSecretText.classList.toggle('hidden');
        btn.textContent = topSecretText.classList.contains('hidden') ? 'Mostrar' : 'Ocultar';
    });
}