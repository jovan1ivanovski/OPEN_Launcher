describe('Game menu delete user', function () {


 var deleteUser = require('../page/DeletePageObject.js');

beforeEach(function () {
        console.log(" Method started");
        browser.get("http://localhost:3000/#/login");
        
        
});
 
describe('Delete user', function () {
it('should delete profile and remove it from the profile page', function() {
   
   deleteUser.DeleteUser();
  expect(deleteUser.deleteBtnIsVisible()).toBe(false);
        
console.log("Finishing : Delete profile");
  });
    
    }); 
 
 describe('Cancer Delete user', function () {
 it('should return to the profile page and delete button to be visible', function() {
   
   deleteUser.CancelDelete();
   expect(deleteUser.deleteBtnIsVisible()).toBe(true);
   console.log("Finishing :Cancel Delete profile");
        });
    }); 
    
 }); 

