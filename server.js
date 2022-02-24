const express = require("express");

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/verify', (req, res) => {

    const adhaarNo = req.query.adhaarNo;

    try {

        if (adhaarNo.length <= 0 || !adhaarNo) throw Error;

        else {

            res.json({

                success: true, isdata: false

            })

        }

    }

    catch {

        res.json({

            success: false, message: "UNDEFINED ADHAAR NUMBER"

        })

    }

})

app.post('/data', (req, res) => {

    try {

        Object.entries(req.body).map(val => {

            if (val[1].length <= 0 || !val[1]) throw Error;

        })

        res.json({ success: true })

    }

    catch {

        res.json({

            success: false, message: "UNDEFINED DATA ENTERED PLEASE CHECK"

        })

    }

})

app.listen(port, () => {

    console.log(`App listening at http://localhost:${port}`)

});
