describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('/');

        var title = browser.getTitle();
        expect(title).toEqual("OPEN");
    });
});