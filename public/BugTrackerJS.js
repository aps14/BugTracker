const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if(!user){
        window.location.pathname = '/index.html';
        }
})