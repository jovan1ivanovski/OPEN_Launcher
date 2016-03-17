describe('Game menu delete user', function () {


 var deleteUser = require('../page/DeletePageObject.js');

beforeEach(function () {
        console.log(" Method started");
        browser.get("http://localhost:3000/#/login");
        browser.sleep(500);
        browser.ignoreSynchronization = true;
 });
        
afterAll(function() { 
    browser.sleep(500);
    browser.ignoreSynchronization = false; 
        
});
 

 
 describe('Cancel Delete user', function () {
 it('should return to the profile page and alert to be displayed', function() {
   
   deleteUser.CancelDelete();
   expect(deleteUser.ReturnMessage()).toEqual("Бришењето е откажано.");
   console.log("Finishing :Cancel Delete profile");
        });
    }); 
    
    
    describe('Delete user', function () {
    it('should delete profile and remove it from the profile page and alert to be displayed', function() {
   
   deleteUser.DeleteUser();
   expect( deleteUser.ReturnMessage()).toEqual("Профилот е успешно избришан.");
   console.log("Finishing : Delete profile");
  });
    
    }); 
    
    
    }); 
    
    
    
  

