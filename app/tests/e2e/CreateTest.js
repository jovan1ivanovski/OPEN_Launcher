describe('Game menu log in user', function () {


 var CreateUserPage = require('../page/CreateUserPageObject.js');
 
	beforeEach(function () {
        console.log(" Before Method : Before Each Function");

        CreateUserPage.get('http://localhost:3000/#/login');
        

    });

 

    it('User can create new user ', function () {
        CreateUserPage.clickCreateBtn();
		CreateUserPage.writeName();
		CreateUserPage.selectPicture();
		CreateUserPage.clickCreateBtnAfter();
        expect(CreateUserPage.checkText()).toEqual("Корисничко име");
		console.log("Finishing : User created");
    });
    
    it('User can not create new user with same name ', function () {
        CreateUserPage.clickCreateBtn();
		CreateUserPage.writeName();
		CreateUserPage.selectPicture();
		CreateUserPage.clickCreateBtnAfter();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/register");
		console.log("Finishing : User can not be created created");
    });

    
	it('User can not be created without selecting picture', function () {
        CreateUserPage.clickCreateBtn();
		CreateUserPage.writeName();
		CreateUserPage.clickCreateBtnAfter();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/register");
		console.log("Finishing : User with same name already exists");
          
 });
 
	it('User can not be created without entering name ', function () {
        CreateUserPage.clickCreateBtn();
		CreateUserPage.selectPicture();
		CreateUserPage.clickCreateBtnAfter();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:3000/#/register");
		console.log("Finishing : User can not be created");
          
 });
 
	it('Button back is clickable', function(){
		CreateUserPage.clickCreateBtn();
		CreateUserPage.clickBack();
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://localhost:3000/#/login')
		console.log("Button back is clickable")
 });
 
 it('Button back is clickable when name is populated', function(){
		CreateUserPage.clickCreateBtn();
		CreateUserPage.writeName();
		CreateUserPage.clickBack();
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://localhost:3000/#/login')
		console.log("Button back is clickable")
 });
 
 it('Button back is clickable when picture is selected', function(){
		CreateUserPage.clickCreateBtn();
		CreateUserPage.selectPicture();
		CreateUserPage.clickBack();
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://localhost:3000/#/login')
		console.log("Button back is clickable")
 });
 
 it('Button back is clickable when picture is selected and name is populated', function(){
		CreateUserPage.clickCreateBtn();
		CreateUserPage.selectPicture();
		CreateUserPage.writeName();
		CreateUserPage.clickBack();
		var url = browser.getCurrentUrl();
		expect(url).toEqual('http://localhost:3000/#/login')
		console.log("Button back is clickable")
 });		
});