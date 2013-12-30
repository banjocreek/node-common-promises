## Description

Promise functions useful across projects.

### Common promise functions including:

- show: put value to console
- ignore: put value in bit bucket

Example:

    var commonp = require("common-promises")
        p       = ...;

    p
        .then(hardWork)
        .then(commonp.show)    // inspect the result
        .then(secretWork)
        .then(commonp.ignore)  // don't leak the secrets 
        .done();


### Promise value holder

Tap into your promise chain and re-introduce the value
as often as needed downstream.

Example:

    var commonp = require("common-promises")
        p       = ...,
        v;

    v = commonp.createCapture();

    p
      .then(computeSomething)
      .then(v.assign)          // capture the promise value
      .then(doThing1)          // do something with the value
      .then(v.use)             // re-introduce the captured value
      .then(doThing2)          // do something else with the value
      .then(v.use)             // re-introduce it as many times as you wish
      .then(doThing3)
      .done();

