// node myfile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: any pending setTimeout, setInterval, setImmediate?
  // Check two: any pending OS tasks? (Live server listening to port)
  // Check three: any pending long running operations? (like filesystem module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // Node looks at pending timers and sees if any functions are ready to be called. setTimeout, setInterval
  // Node looks at pendingOSTasks and pendingOperations and calls relevat callbacks
  /* Pause execution. Continue when ...
   a new pendingOSTask is done
   a new pendingOperation is done
   a timer is about to complete
 */
  // Look at pendingTimers. Call any setImmediate
  // handle any 'close' events
}

// exit back to terminal
