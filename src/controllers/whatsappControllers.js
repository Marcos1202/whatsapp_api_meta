const VerifyToken = (req, res) =>{
    res.send("hala verfytoken")
}

const ReceivedMessage = (req, res) =>{
    res.send("hi ReceivedMessage")
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}