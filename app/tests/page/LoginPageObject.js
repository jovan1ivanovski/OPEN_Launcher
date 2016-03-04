var UserLogin = function () {

	
	var profile_number = element.all(by.className('img-circle')).count();
    var random_no = Math.floor(Math.random() * profile_number);
    var signBtn = element(by.id('btn-login'));
    var someProfile =element.all(by.className('img-circle')).get(random_no);
    var logOutbtn= element(by.id('logout'));
	
	
    
    this.LogIn = function () {
        someProfile.click();
        signBtn.click();
		
    };
    
       
    this.LogOut = function () {
        someProfile.click();
        signBtn.click();
		logOutbtn.click();
    };
    
    this.LoginButtonIsDisplayed= function (element){
        element.isDisplayed();
        return this;
    }

   
   
};

module.exports = new UserLogin();