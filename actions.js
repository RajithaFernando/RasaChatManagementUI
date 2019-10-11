
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
            const defaultmsg = "Mobitel PIN Registration Portal - #171# 
 Mobitel Self Care Information Portal - #888# 
 Self Care Billing Information Portal (IVR) - 1456  
 Self Care Billing Information Portal ( USSD ) #1456#  
 Daily Usage Alert ( SMS ) 4545 
 Instant Usage Alert ( SMS ) 4567  
 Loyalty Self Care Portal - #557# 
 Club Points Self Care Portal - #556# 
 Mobitel Store Locator - #138# 
 View Cash Bonanza winning chances - #151# 
 Registration Information - *132# 
 Change Language on Customer Support IVR - 1717 
 for more details, visit https://www.mobitel.lk/self-help-codes-postpaid"
            console.log('Natha')
            return defaultmsg
        }
    }
    