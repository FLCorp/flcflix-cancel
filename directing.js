function checkAccessCode() {
    let enteredName = document.getElementById('accessNameInput').value;
    let enteredCode = document.getElementById('accessCodeInput').value;
    let enteredNameMobile = document.getElementById('accessNameInputMobile').value;
    let enteredCodeMobile = document.getElementById('accessCodeInputMobile').value;

    // Vérifier si le code entré est correct
    if (enteredName === 'FloLeCrafteur') {
        if (enteredCode === 'Admin0001-FloLeCrafteur-23042024') {
            // Rediriger vers la page autorisée
            window.location.href = 'account/flc.html';
        } 
        else {
            // Afficher un message d'erreur
            document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
        }
    }
    else {
        // Afficher un message d'erreur
        document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
    }

    //Mobile
    if (enteredNameMobile === 'FloLeCrafteur') {
        if (enteredCodeMobile === 'Admin0001-FloLeCrafteur-23042024') {
            // Rediriger vers la page autorisée
            window.location.href = 'account/flc.html';
        } 
        else {
            // Afficher un message d'erreur
            document.getElementById('errorMessageMobile').innerText = 'Oups! On dirait que quelque chose est pas valide';
        }
    }
    else {
        // Afficher un message d'erreur
        document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
    }

    if (enteredName === 'EXTAZY') {
        if (enteredCode === 'Admin0002-EXTAZY-23042024') {
            // Rediriger vers la page autorisée
            window.location.href = 'account/extazy.html';
        } 
        else {
            // Afficher un message d'erreur
            document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
        }
    }
    else {
        // Afficher un message d'erreur
        document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
    }

    if (enteredName === 'narrox') {
        if (enteredCode === 'Admin0003-narrox-23042024') {
            // Rediriger vers la page autorisée
            window.location.href = 'account/narrox.html';
        } 
        else {
            // Afficher un message d'erreur
            document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
        }
    }
    else {
        // Afficher un message d'erreur
        document.getElementById('errorMessage').innerText = 'Oups! On dirait que quelque chose est pas valide';
    }
}
