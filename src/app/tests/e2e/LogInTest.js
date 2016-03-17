describe('Game menu log in user', function () {


 var logInPage = require('../page/LoginPageObject.js');

beforeEach(function () {
        console.log(" Method started");
         browser.get("http://localhost:3000/#/login");
});
 
describe('Open application', function () {
    it('should display log in page', function () {
        var title = browser.getTitle();
        expect(title).toEqual("OPEN");
    });
});

    it('sign in button should not be visible if profile is not selected', function () {
        
        
        expect(logInPage.signBtnIsVisible()).toBe(false);
        console.log("Finishing :Sign in button not visible");
        
    });

    it('User can log in when selecting existing profile ', function () {
        
        logInPage.LogIn();
        expect(logInPage.getCurrentURL()).toEqual("http://localhost:3000/#/home");
        logInPage.LogOut();
        
		console.log("Finishing : User loged in");
    });
    
   it('User can log out from home page ', function () {
        
        logInPage.LogIn();
        logInPage.LogOut();
        expect(logInPage.getCurrentURL()).toEqual("http://localhost:3000/#/login");
		console.log("Finishing : User loged out");
    });
    
    
    it('should filter profiles by entering username', function () {
        logInPage.FilterUsername("da");
        expect(logInPage.GetTextFromFilter()).toContain("da");
        logInPage.FilterUsernameClear();
        console.log("Finishing : Filter username");
        
    });
    
     
});
          
 