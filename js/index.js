const baseURL = 'http://localhost:3000'

$("#login").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();
    const data = {
        email,
        password
    }
    console.log({ data });
    axios({
        method: 'post',
        url: `${baseURL}/users/signin`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        console.log({ response });
        const { message, data } = response.data
        if (message == "SignIn - Success") {
            localStorage.setItem('token', response.data.accessToken);
            window.location.href = 'chat.html';
        } else {
            console.log("In-valid email or password");
            alert("In-valid email or password")
        }
    }).catch(function (error) {
        console.log(error);
    });

})






