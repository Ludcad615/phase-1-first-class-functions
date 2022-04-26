function receivesAFunction(callMeBack) {
    callMeBack();
  }
  
  function returnsANamedFunction() {
    return function callMeAgain() {
      console.log("Call me again");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }