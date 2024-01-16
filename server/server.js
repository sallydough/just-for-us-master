const express = require("express");
const twilio = require("twilio");

const app = express();
const port = 3001; // or any other port you prefer

// Twilio credentials
// const accountSid = "AC5063628bd2360c9dcee6e2e75f2f0445";
// const authToken = "f2cf4ec4ea937e78795ae2dcb5f2f830";
// const twilioPhoneNumber = "+15086391090";

const client = twilio(accountSid, authToken);

// Endpoint to trigger a phone call
app.get("/call-help", (req, res) => {
  const toPhoneNumber = "+14036201992"; // Replace with the actual phone number

  // Initiate a call
  client.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml", // Replace with a TwiML URL or other endpoint
      to: toPhoneNumber,
      from: twilioPhoneNumber,
    })
    .then((call) => {
      console.log(`Call SID: ${call.sid}`);
      res.send("Call initiated!");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error initiating the call");
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
