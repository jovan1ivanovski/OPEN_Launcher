describe('Game menu log in user', function () {


 var logInPage = require('../page/LoginPageObject.js');

 
/*describe('Open application', function () {
    xit('should display log in page', function () {
        var title = browser.getTitle();
        expect(title).toEqual("OPEN");
    });
});
*/
    it('User can log in when selecting existing profile ', function () {
         //var title = browser.getTitle();
        logInPage.LogIn();
        logInPage.LogOut();
        var title = browser.getTitle();
        expect(title).toEqual("OPEN");
		console.log("Finishing : User loged in");
    });
    
  
          
 });
