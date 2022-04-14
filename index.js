let spreadsheetIdVar;

function createSheet() {
    var title = getSheetTitle()
    clearSheetTitle()

    var request = gapi.client.sheets.spreadsheets.create({
        properties: {
            title: title
        }
    });
    request.then(function (response) {
        spreadsheetIdVar = response.result.spreadsheetId;
        console.log(spreadsheetIdVar);
    }, function (reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function getData() {
    var params = {
      // The ID of the spreadsheet to retrieve data from.
      spreadsheetId: spreadsheetIdVar,  // TODO: Update placeholder value.

      // The A1 notation of the values to retrieve.
      range: 'A1:JJ10000',  // TODO: Update placeholder value.

      majorDimension: 'ROWS',

      // How values should be represented in the output.
      // The default render option is ValueRenderOption.FORMATTED_VALUE.
      valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

      // How dates, times, and durations should be represented in the output.
      // This is ignored if value_render_option is
      // FORMATTED_VALUE.
      // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
      dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
      // TODO: Change code below to process the `response` object:
      console.log(response.result);
    }, function(reason) {
      console.error('error: ' + reason.result.error.message);
    });
  }


function insertData() {

    var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: spreadsheetIdVar,  // TODO: Update placeholder value.

        // The A1 notation of the values to update.
        range: "A1:A10000",  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'RAW',  // TODO: Update placeholder value.
    };

    var valueRangeBody = {
        "values": [
            [
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                1,
                6,
                2,
                43,
                9,
                2,
                5,
                7,
                9,
                3,
                6,
                9,
                2,
                8
            ]
        ]
    };

    var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function (response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
    }, function (reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function initClient() {
    var API_KEY = 'AIzaSyAj0ZfphIklqW2MjBduu1_NmoqXap23lRQ'; // TODO: Update placeholder with desired API key.

    var CLIENT_ID = '604594895802-m9vu2v8gkfd3a1t44hm4lfc74jimqfkl.apps.googleusercontent.com'; // TODO: Update placeholder with desired client ID.

    // TODO: Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/spreadsheets'
    var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(signInStatus);
    });
}

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function signInStatus() {
    console.log("Authentification is: " + gapi.auth2.getAuthInstance().isSignedIn.get());
}

function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function getSheetTitle() {
    var titleInput = document.getElementById("input-title").value;
    return titleInput;
}

function clearSheetTitle() {
    var titleForm = document.getElementById("form-title").reset();
    return titleForm;
}