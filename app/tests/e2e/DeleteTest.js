describe('Game menu delete user', function () {


 var deleteUser = require('../page/DeletePageObject.js');

beforeEach(function () {
        console.log(" Method started");
        
        
});
 
describe('Delete user', function () {
it('should delete profile and remove it from the log in list', function() {
   var before= deleteUser.CountProfile();
   deleteUser.DeleteUser();
   var after= deleteUser.CountProfile();
   expect(before).toEqual(after);
    console.log("Finishing : Delete username");
        });
    });
    
 
 xdescribe('Cancer Delete user', function () {
 it('should delete profile and remove it from the log in list', function() {
   var before= deleteUser.CountProfile();
   deleteUser.CancelDelete();
  var after= deleteUser.CountProfile();
   
   expect(before).toEqual(after);
    console.log("Finishing :Cancel Delete username");
        });
    }); 
    
});

