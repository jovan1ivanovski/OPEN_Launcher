describe("Upload picture page", function() {


    var uploadPage = require("../page/UploadPageObject.js");
    var logInPage = require("../page/LoginPageObject.js");
    


    beforeEach(function() {
        console.log(" Method started");
        browser.get("http://localhost:3000/#/login");
    });

    it("Logged user can upload picture ", function() {

        logInPage.LogIn();
        uploadPage.UploadPicture();
        browser.sleep(500);
        browser.ignoreSynchronization = true;
        expect(uploadPage.ReturnMessage()).toEqual("Сликата е успешно додадена!");
        browser.sleep(500);
        browser.ignoreSynchronization = false;
        uploadPage.NavigateToHomePage();
        logInPage.LogOut();
        console.log("Finishing: Logged user can upload picture");
    });

    it("Upload picture page not available if user is not logged in ", function() {
        uploadPage.NavigateToUploadPage();
        expect(uploadPage.getCurrentURL()).toEqual("http://localhost:3000/#/login");
        console.log("Upload picture page not available if user is not logged in");
    });
    
    it("Choose picture button should be enabled when user is navigated to Upload page", function() {
        logInPage.LogIn();
        uploadPage.NavigateToUploadPage();
        expect(uploadPage.isChooseBtnEnabled()).toBe(true);
        console.log("Choose picture button should be enabled when user is navigated to Upload page");
    });

    it("Upload button should be disabled if file is not selected", function() {
        logInPage.LogIn();
        uploadPage.NavigateToUploadPage();
        expect(uploadPage.isUploadBtnEnabled()).toBe(false);
        console.log("Upload button should be disabled if file is not selected");
    });
    
    it("Path field should be disabled when user is navigated to upload page", function() {
        logInPage.LogIn();
        uploadPage.NavigateToUploadPage();
        expect(uploadPage.isPathFieldEnabled()).toBe(false);
        console.log("Path field should be disabled when user is navigated to upload page");
    });


    it("User can navigate from upload to log in page", function() {
        uploadPage.NavigateToLoginPage();
        expect(uploadPage.getCurrentURL()).toEqual("http://localhost:3000/#/login");
        console.log("User can navigate from upload to log in page");
    });

    it("User can navigate from upload to home page", function() {
        uploadPage.NavigateToHomePage();
        expect(uploadPage.getCurrentURL()).toEqual("http://localhost:3000/#/home");
        console.log("User can navigate from upload to home page");
    });


});




