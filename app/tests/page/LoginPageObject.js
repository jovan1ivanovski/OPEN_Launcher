var logInPage = function () {

	
	//var profile_number = element.all(by.className('img-circle')).count();
   //var random_no = Math.floor(Math.random() * profile_number);
    var signBtn = element(by.id('btn-login'));
    var someProfile =element.all(by.className('img-circle')).get(4);
    var logOutbtn= element(by.id('logout'));
	
	this.get = function (value) {
        browser.get(value);
    };
    
    this.LogIn = function () {
        someProfile.click();
        signBtn.click();
        
		
    };
    
       
    this.LogOut = function () {
        logOutbtn.click();
    };
    
   
  

};
   
module.exports = new logInPage();