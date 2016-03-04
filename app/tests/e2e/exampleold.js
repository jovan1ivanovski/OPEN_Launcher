
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


	describe('User can log in', function () {
	 it('User can log in ', function () {
    var profile_number = element.all(by.className('img-circle')).count();
    //var profile =element.all(by.id('users')).get(1).click();
	 console.log("Finishing : User loged in"+profile_number);
    var signBtn = element(by.id('btn-login'));
    var logout =  element(by.xpath('/html/body/app/div/home/div/div/a'));
    var createUser=element(by.id('btn-register'));
   // profile.click();
    //createUser.click();
  //  signBtn.click();
    //logout.click();			
     console.log("Finishing : User loged in");
     //var title = browser.getTitle();
     expect(profile_number).toEqual(8);
    });
 });
 
 /*describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
    
  });
});*/