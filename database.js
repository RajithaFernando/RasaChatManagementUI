

const database = {
    intents:[
        "help_code_needed","goodbye" ,"affirm", "greet", "deny"
    ],
    slots:{
        helpcode:"Somegrabage", otherslot:"someothervalue"
    },
    actions:[
        {
            action_name:"recharge_ussd",
            action_message:"Dial *102*PIN NO# to recharge your mobitel account."
        },
        {
            action_name:"broadband_ussd",
            action_message:"Dial #170# from your Mobitel phone to view & activate Internet Plans"
        },
        {
            action_name:"cbc_ussd",
            action_message:"Dial #160# from your Mobitel phone to activate, deactivate & manage CBC features"
        },
        {
            action_name:"self_care_ussd",
            action_message:"Dial #888# from your Mobitel phone to access/manage a range of product related information and services. To access your Usagae & Account Balance, free entitlement, billing date, due date & credit limit instantly, call 1456  or dial #1456# for USSD menu."
        },
        {
            action_name:"pin_registration_ussd",
            action_message:"Dial #171# from your phone and register for a PIN to easily transact with Mobitel."
        },
        {
            action_name:"daily_usage_ussd",
            action_message:"To receive free Daily Usage alerts, type yes & send to 4545 To receive an instant usage alert, type usage & send to 4567."
        },
        {
            action_name:"club_magnate_ussd",
            action_message:"Club Magnet Loyalty customers can dial #557# & access a range of information regarding Club Magnet Loyalty program & benefits. to view & manage the Mobitel Club Points, dial #556#"
        },
        {
            action_name:"mobitel_store_ussd",
            action_message:"By dialing #138# from your Mobitel phone you can now locate the three closest Mobitel outlets."
        },
        {
            action_name:"cash_bonanza_ussd",
            action_message:"Dial #151# from your Mobitel to know your Cash Bonanza winning chances."
        },
        {
            action_name:"registration_details_ussd",
            action_message:"Dial *132# from your Mobitel to access & verify your registration details such as name, NIC number, Mobile number, SIM number, Account number and  address."
        },
        {
            action_name:"customer_service_ussd",
            action_message:"24 Hour Customer Service  Hotline +94 (0) 712755777 or dial 1717 from any network in Sri Lanka"
        }
    ]
}

module.exports = { database: data};