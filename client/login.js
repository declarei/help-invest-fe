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
        success: function(data) {
            alert("oiii")
            console.log(data)
        },
        error: function(request, error) {
            alert("Error: ", error)
        }
    })

}