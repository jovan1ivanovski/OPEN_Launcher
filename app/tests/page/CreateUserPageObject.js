var CreateUserPage = function () {

	
	//var profile_number = element.all(by.className('img-circle')).count();
   //var random_no = Math.floor(Math.random() * profile_number);
    var createBtnFirstPage = element(by.id('createUser'));
    var enterName =element(by.id('username'));
    var selectPhoto = element(by.xpath('/html/body/app/div/undefined/div/div/form/div[2]/div/div[3]/div/img'));
	var createBtnSecondPage = element(by.id('createNewUser'));
	var createdProfilMsg = element(by.xpath('/html/body/app/div/login/div/div/div[1]/label'));
    var alertmessage= element(by.id('messagelabel'));
	//var selectPictureMsg = element(by.xpath('/html/body/app/div/alerts/div/div'));
	//var enterNameMsg = element(by.xpath(''));
	var backBtn = element(by.id('backToLogin'));
	
	this.get = function (value) {
        browser.get(value);
    };
    
    
	this.clickCreateBtn = function () {
		createBtnFirstPage.click();
	};
	
	this.clickCreateBtnAfter = function () {
		createBtnSecondPage.click();
	};
	this.writeName = function (name) {
		enterName.sendKeys(name);
	};
	
	this.selectPicture = function () {
		selectPhoto.click();
	};
       
    this.checkText = function() {
       return createdProfilMsg.getText();
    };
	
	
    this.clickBack = function(){
		backBtn.click();
	};
    
     this.ReturnMessage =function (){
       var message = alertmessage.getText();
       return message;   
       
     }
     
      this.isCreateBtnEnabled = function(){
       var isDisabled= createBtnSecondPage.isEnabled();
        return isDisabled;
   
  

};

};
   
module.exports = new CreateUserPage();