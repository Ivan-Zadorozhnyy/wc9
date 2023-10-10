document.getElementById('sampleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const passwordRepeat = document.getElementById('passwordRepeat').value;

    if (password !== passwordRepeat) {
        alert('Passwords do not match.');
        return;
    }

    let formData = new FormData(e.target);
    let output = '';

    for (let [key, value] of formData.entries()) {
        output += key + ': ' + value + '<br>';
    }

    document.getElementById('output').innerHTML = output;
});
