describe('Game menu log in user', function () {


 var UserLogin = require('../page/LoginPageObject.js');

 
describe('Open application', function () {
    it('should display log in page', function () {
        var title = browser.getTitle();
        expect(title).toEqual("OPEN");
    });
});

    xit('User can log in when selecting existing profile ', function () {
        UserLogin.LogIn();
        expect (UserLogin.LoginButtonIsDisplayed(UserLogin.logOutbtn)).toEqual(true);
        UserLogin.LogOut();
		console.log("Finishing : User loged in");
    });
    
    
      xit('User can\'t log in when existing profile is not selected ', function () {
        UserLogin.LogIn();
        UserLogin.LogOut();
        expect (UserLogin.LoginButtonIsDisplayed(UserLogin.logOutbtn)).toEqual(false);
		console.log("Finishing : User loged out");
    });
    
     

});