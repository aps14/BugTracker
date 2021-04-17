const auth = firebase.auth();

const SignedIn = document.getElementById('SignedIn');
const SignedOut = document.getElementById('SignedOut');

const provider = new firebase.auth.GoogleAuthProvider();

signInGoogleBtn.onclick = () => auth.signInWithPopup(provider);

signInAnon.onclick = () => auth.signInAnonymously();

auth.onAuthStateChanged(user => {
    if(user){
        window.location.pathname = '/BugTrackerHome.html';
    }
})