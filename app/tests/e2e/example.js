
beforeEach((done) => {
  browser.get('http://localhost:3000/#/login');
  $('body').isPresent().then(()=> {
    done();
  }, () => {
    //error skipped
    done();
  })
});

    	

describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        var title = browser.getTitle();
        expect(title).toEqual("OPEN");
    });
});


	
	
    /*
    LogIn = function () {
        someProfile.click();
        signBtn.click();
		
    };*/
    
       
   /* LogOut = function () {
        someProfile.click();
        signBtn.click();
		logOutbtn.click();
    };
    
    LoginButtonIsDisplayed= function (element){
        element.isDisplayed();
        return this;
    };

      */



    describe('Log in', function () {
    it('User can log in when selecting existing profile ', function () {
   // var profile_number = element.all(by.className('img-circle')).count();
   // var random_no = Math.floor(Math.random() * profile_number);
    var signBtn = element(by.id('btn-login'));
    var someProfile =element.all(by.className('img-circle')).get(1);
    var logOutbtn= element(by.id('logout'));
        someProfile.click();
        signBtn.click();
        expect(logOutbtn.isDisplayed()).toEqual(true);
        //someProfile.click();
       // signBtn.click();
		//logOutbtn.click();
		console.log("Finishing : User loged in");
    });
});
    
     /* describe('Log in', function () {
      it('User can\'t log in when existing profile is not selected ', function () {
      //var logOutbtn= element(by.id('logout')); 
        expect(logOutbtn.isDisplayed()).toEqual(false);
		console.log("Finishing : User loged in");
    });
 });   
     
*/
   
