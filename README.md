# node_peerchallenge

Module Madness

In this challenge, you will need to spin up a new project (much like we did in lecture). You will create three modules as specified below, create a server.js that will use these modules!

Modules

Module One (randomNumber.js)

The first module will export a function that returns a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). When you call this module, use 100 as your min, and 1000000 as your max.

Module Two (convertToDollars.js)

The second module should accept a number and convert it to a USD value. You can find some good implementations of this conversion online.

Module Three (moduleThree.js)

The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:

The first function export should return the result of the first module being passed into the second module.
The second function export should return the text “Account balance: \n”.
server.js

Finally, in the server.js file use the functions from your third module to produce the following output when you visit http://localhost:3000 in your browser:

Account balance:
$156,301
