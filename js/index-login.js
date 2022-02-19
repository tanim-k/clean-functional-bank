// get user gmail and password //
document.getElementById('login-submit').addEventListener('click', function(){
    document.getElementById('user-email');
    const userEmail = document.getElementById('user-email').value;
    // console.log(userEmail);
    document.getElementById('user-pass');
    const userPass = document.getElementById('user-pass').value;
    // console.log(userPass);
    if(userEmail == 'abul@gmail.com' && userPass == '12345') {
        // console.log('valid user');
        window.location.href = 'banking-function.html';
    }
})

