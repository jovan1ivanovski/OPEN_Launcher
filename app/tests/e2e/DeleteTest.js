describe('Game menu delete user', function () {


 var deleteUser = require('../page/DeletePageObject.js');

beforeEach(function () {
        console.log(" Method started");
});
 
describe('Delete user', function () {
  
     var items = element.all(by.className('img-circle'));  
     items.count().then(function(originalCount) {
     startCount = originalCount;
  });

it('should delete profile and remove it from the log in list', function() {
   deleteUser.DeleteUser();
   expect(items.count()).toEqual(startCount-1);
        });
    });
    
    
});

