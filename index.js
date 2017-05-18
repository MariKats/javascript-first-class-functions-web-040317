function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction(){
  function hello() {console.log("hello")}
  return hello
}

function returnsAnAnonymousFunction(){
  return function(){console.log("hello")}
}
