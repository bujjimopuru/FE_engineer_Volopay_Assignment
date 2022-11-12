const express = require('express');
const router = express.Router();

router.get('/cards', (req, res) => {
    const str = [
        {
        name: 'Mixmax',
        user_name:"Vishal",
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: {
        value: 1,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/G7KKjwP/fire.png"
        },
        available_to_spend: {
        value: 9,
        currency: "SGD"
        },
        card_type: "burner",
        expiry: "9 feb",
        limit: 10,
        status: 'active'
    },
    {
        name: 'Quickbooks',
        user_name:"Rajesh",
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value: 10,
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 10,
        status: 'active'
    },
    {
        name: 'Motion',
        user_name:"Rajith",
        budget_name: 'Software subscription',
        owner_id: 3,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value: 15,
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 15,
        status: 'active'
    },
    {
        name: 'Pandadoc',
        user_name:"Mayank",
        budget_name: 'Software subscription',
        owner_id: 4,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value: 180,
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 180,
        status: 'active'
    },
    {
        name: 'Xero',
        user_name:"Mayank",
        budget_name: 'Software subscription',
        owner_id: 5,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value:"50",
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 50,
        status: 'active'
    }
    ,{
        name: 'Mookambika',
        user_name:"Rajith",
        budget_name: 'Miscellaneous',
        owner_id: 6,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value: 20,
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 20,
        status: 'active'
    },
    {
        name: 'Apple Dev License',
        user_name:"Rajesh",
        budget_name: 'Sales Singapore',
        owner_id: 7,
        spent: {
        value: 148,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/G7KKjwP/fire.png"
        },
        available_to_spend: {
        value: 30,
        currency: "SGD"
        },
        card_type: "Burner",
        expiry: "Aug",
        limit: 178,
        status: 'active'
    },
    {
        name: 'Mookambika',
        user_name:"Rajith",
        budget_name: 'Miscellaneous',
        owner_id: 7,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value: 20,
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 20,
        status: 'block'
    },
    {
        name: 'Xero',
        user_name:"Mayank",
        budget_name: 'Software subscription',
        owner_id: 8,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value:"50",
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 50,
        status: 'your'
    },
    {
        name: 'Pandadoc',
        user_name:"Mayank",
        budget_name: 'Software subscription',
        owner_id: 9,
        spent: {
        value: 0,
        currency: "SGD",
        imgUrl:"https://i.ibb.co/P53MQx2/arrow.png"
        },
        available_to_spend: {
        value: 180,
        currency: "SGD"
        },
        card_type: "subscription",
        expiry: "Aug",
        limit: 180,
        status: 'your'
    }
]
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;
