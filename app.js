const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const data = require('./database')
const app = express();
const mysql = require('mysql')
var fs = require('fs');



app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



// API Listning on PORT 4000
app.listen(4000, () => {
    console.log('Listining to port 4000')

});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatbot'
})

connection.connect(err => {
    if (err) {
        return err
    }
    else {
        console.log('Database Connected')
    }
});




app.post('/getdatafromdatabase', (req, res) => {
    query = 'SELECT * FROM actions'
    connection.query(query, (error, data) => {
        if (error) { throw error }
        else {
            res.json(data)
            console.log(data)
        }
    })
    console.log('requestcame')

})

app.post('/rasaincomingmessage', (req, res) => {
    // console.log(req.body.message)
    if (req.body.message) {

    }
    let message = req.body.message
    axios({
        method: 'post',
        url: 'http://localhost:5005/model/parse',
        data: {
            "sender": "Rasa",
            "text": message
        }
    }).then(
        (response) => {
            // console.log(response.data)
            let intent = response.data.intent.name
            let slot = response.data.entities[0].value
            if (intent == 'help_code_needed') {
                res.send(ussdDetails(slot))
                console.log('OK')
            }

        }
    ).catch(
        (error) => {
            console.log("error")
        }
    )
});


ussdDetails = (slot) => {
    ussd_details = {
        "recharge": "Dial *102*PIN NO# to recharge your mobitel account.",
        "broadband": "Dial #170# from your Mobitel phone to view & activate Internet Plans ",
        "cbc": "Dial #160# from your Mobitel phone to activate, deactivate & manage CBC features",
        "self_care": "Dial #888# from your Mobitel phone to access/manage a range of product related information and services. To access your Usagae & Account Balance, free entitlement, billing date, due date & credit limit instantly, call 1456  or dial #1456# for USSD menu. ",
        "pin_registration": "Dial #171# from your phone and register for a PIN to easily transact with Mobitel. ",
        "daily_usage": "To receive free Daily Usage alerts, type yes & send to 4545 To receive an instant usage alert, type usage & send to 4567 ",
        "club_magnate": "Club Magnet Loyalty customers can dial #557# & access a range of information regarding Club Magnet Loyalty program & benefits. to view & manage the Mobitel Club Points, dial #556#",
        "mobitel_store": "By dialing #138# from your Mobitel phone you can now locate the three closest Mobitel outlets.",
        "cash_bonanza": "Dial #151# from your Mobitel to know your Cash Bonanza winning chances. ",
        "registration_details": "Dial *132# from your Mobitel to access & verify your registration details such as name, NIC number, Mobile number, SIM number, Account number and  address. ",
        "customer_service": "24 Hour Customer Service  Hotline +94 (0) 712755777 or dial 1717 from any network in Sri Lanka"
    }
    console.log(slot)
    if (slot in ussd_details) {
        console.log('Tiyenawa')
        console.log(ussd_details[slot])
        return ussd_details[slot]
    }
    else {
        const defaultmsg = "Mobitel PIN Registration Portal - #171# \n Mobitel Self Care Information Portal - #888# \n Self Care Billing Information Portal (IVR) - 1456  \n Self Care Billing Information Portal ( USSD ) #1456#  \n Daily Usage Alert ( SMS ) 4545 \n Instant Usage Alert ( SMS ) 4567  \n Loyalty Self Care Portal - #557# \n Club Points Self Care Portal - #556# \n Mobitel Store Locator - #138# \n View Cash Bonanza winning chances - #151# \n Registration Information - *132# \n Change Language on Customer Support IVR - 1717 \n for more details, visit https://www.mobitel.lk/self-help-codes-postpaid"
        console.log('Natha')
        return defaultmsg
    }
}





app.post('/CreateNewFunction', (req, res) => {


    const myvar = `
    ussdDetails = (slot) => {
        ussd_details = {
            "recharge": "Dial *102*PIN NO# to recharge your mobitel account.",
            "broadband": "Dial #170# from your Mobitel phone to view & activate Internet Plans ",
            "cbc": "Dial #160# from your Mobitel phone to activate, deactivate & manage CBC features",
            "self_care": "Dial #888# from your Mobitel phone to access/manage a range of product related information and services. To access your Usagae & Account Balance, free entitlement, billing date, due date & credit limit instantly, call 1456  or dial #1456# for USSD menu. ",
            "pin_registration": "Dial #171# from your phone and register for a PIN to easily transact with Mobitel. ",
            "daily_usage": "To receive free Daily Usage alerts, type yes & send to 4545 To receive an instant usage alert, type usage & send to 4567 ",
            "club_magnate": "Club Magnet Loyalty customers can dial #557# & access a range of information regarding Club Magnet Loyalty program & benefits. to view & manage the Mobitel Club Points, dial #556#",
            "mobitel_store": "By dialing #138# from your Mobitel phone you can now locate the three closest Mobitel outlets.",
            "cash_bonanza": "Dial #151# from your Mobitel to know your Cash Bonanza winning chances. ",
            "registration_details": "Dial *132# from your Mobitel to access & verify your registration details such as name, NIC number, Mobile number, SIM number, Account number and  address. ",
            "customer_service": "24 Hour Customer Service  Hotline +94 (0) 712755777 or dial 1717 from any network in Sri Lanka"
        }
        console.log(slot)
        if (slot in ussd_details) {
            console.log('Tiyenawa')
            console.log(ussd_details[slot])
            return ussd_details[slot]
        }
        else {
            const defaultmsg = "Mobitel PIN Registration Portal - #171# \n Mobitel Self Care Information Portal - #888# \n Self Care Billing Information Portal (IVR) - 1456  \n Self Care Billing Information Portal ( USSD ) #1456#  \n Daily Usage Alert ( SMS ) 4545 \n Instant Usage Alert ( SMS ) 4567  \n Loyalty Self Care Portal - #557# \n Club Points Self Care Portal - #556# \n Mobitel Store Locator - #138# \n View Cash Bonanza winning chances - #151# \n Registration Information - *132# \n Change Language on Customer Support IVR - 1717 \n for more details, visit https://www.mobitel.lk/self-help-codes-postpaid"
            console.log('Natha')
            return defaultmsg
        }
    }
    `
    
    fs.appendFile('actions.js', myvar, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
})
