describe("Game menu log in page", function() {


    var logInPage = require("../page/LoginPageObject.js");
    

    beforeEach(function() {
        console.log(" Method started");
        browser.get("http://localhost:3000/#/login");
    });

    
     it("should display log in page", function() {
         expect(logInPage.GetTitle()).toEqual("OPEN");
     });
   

    it("sign in button should not be visible if profile is not selected", function() {
        expect(logInPage.signBtnIsVisible()).toBe(false);
        console.log("sign in button should not be visible if profile is not selected");
    });

    it("User can log in when selecting existing profile ", function() {
        logInPage.LogIn();
        expect(logInPage.GetLoggedUser()).toEqual(logInPage.GetSelectedUser());
        expect(logInPage.getCurrentURL()).toEqual("http://localhost:3000/#/home");
        logInPage.LogOut();
        console.log("Finishing : User loged in");
    });

    it("User can log out from home page ", function() {
        logInPage.LogIn();
        logInPage.LogOut();
        expect(logInPage.getCurrentURL()).toEqual("http://localhost:3000/#/login");
        console.log("Finishing : User loged out");
    });


    it("should filter profiles by entering username", function() {
        logInPage.FilterUsername("Auto");
        expect(logInPage.GetTextFromFilter()).toContain("Auto");
        logInPage.FilterUsernameClear();
        console.log("Finishing : Filter username");

    });


});

