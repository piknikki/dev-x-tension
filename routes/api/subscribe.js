const router = require("express").Router();
const request =  require("request");

router.route("/signup")
    .post(function(req, res) {
    const email = req.body.email;

    // js object will need to be stringified
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/a8cee5253f",
        method: "POST",
        headers: {
            "Authorization": 'devxtension 4a8eff1fc62203038173f4076f641d23-us20'
        },
        body: jsonData

    }


    // call the function
    request(options, function(error, response, body) {
        if (error) {
            console.log(error)
        } else {
            console.log(response.statusCode)
        }
    })

});

module.exports = router;
