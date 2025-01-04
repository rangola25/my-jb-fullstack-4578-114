getUserInfo("First name");
getUserInfo("Last name");
getUserInfo("Email");
getUserInfo("Phone number");
getUserInfo("Age");
function getUserInfo(info) {
    const userInfo = prompt(`please enter your ${info}`);
    document.getElementById('user').innerHTML += `${info}: ${userInfo}<br>`;
}
