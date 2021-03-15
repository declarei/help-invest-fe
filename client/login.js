$("#loginButton").click(login);

function login() {
    var email = $("#email").val();
    var password = $("#password").val();

    var dataBody = {
        password: password,
        email: email
    }

    $.ajax({
        url: 'https://en4nt6p4m0cu4le.m.pipedream.net',
        type: 'post',
        data: dataBody,
        dataType: 'json',
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            console.log(result)
            
        },
        error: function(error) {
            alert("aqui2")
            console.log(error)
        }
    })

    window.location.href = "../template/signed-in.html"

    return false;

}