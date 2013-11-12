var sinon = require('sinon'),
    map = require('../lib/map.js'),
    assert = require('assert');

describe('map', function() {
   beforeEach(function(){
     sinon.stub(console, 'log');
   });

  afterEach(function() {
    console.log.restore();
  });   
  
  it('when calling show should log', function(){
	map.show();
	assert(console.log.calledOnce);
	assert("map.show", console.log.args[0]);
   });
  
  it('when calling render should log', function(){
	map.render();
	
	assert(console.log.calledOnce);
	assert("map.render", console.log.args[0]);
  });
});
