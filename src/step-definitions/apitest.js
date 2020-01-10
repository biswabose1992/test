const {Given,When,Then}= require('cucumber')


Given ('Api Test',function(){
     
 browser.url('http://foo.bar');
browser.setupInterceptor(); // capture ajax calls
browser.expectRequest('GET', '/api/foo', 200);


})