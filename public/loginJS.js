
const auth = firebase.auth();

const SignedIn = document.getElementById('SignedIn');
const SignedOut = document.getElementById('SignedOut');

const provider = new firebase.auth.GoogleAuthProvider();

signInGoogleBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

signInAnon.onclick = () => auth.signInAnonymously();

auth.onAuthStateChanged(user => {
    if(user){
        SignedIn.hidden = false;
        SignedOut.hidden = true;
    }else{
        SignedOut.hidden = false;
        SignedIn.hidden = true;
    }
})