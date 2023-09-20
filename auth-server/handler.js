"use strict";

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events.public.readonly",
];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = ["https://thisjunghyewon.github.io/meet/"];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);
//This instance accepts CLIENT_ID, CLIENT_SECRET, and the redirect URL as parameters.

module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  // which allows you to seamlessly retrieve an access token, refresh it, and retry the request.

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};
