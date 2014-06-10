var send = function (event) {
    event.preventDefault();
    mail = $('#mail').val();
    if (validator.isEmail(mail)) {
        $.ajax({
            type: 'POST',
            url: '/subscribe',
            data: {
                mail: mail
            },
            success: function (msg) {
                $('#mailForm')[0].reset();
                var res = msg.status;
                switch (res) {
                    case 201:
                        alert("Success");
                        break;
                    case 500:
                        alert("Error");
                        break;
                    case 400:
                        alert("Bad request")
                        break;
                    case 302:
                        alert("Already subscribed")
                }
            }

        });
    } else {
        alert("Incorrect e-mail address")
    }
}

$('#send').click(send);
