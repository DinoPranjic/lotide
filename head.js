const head = function(array) {
  // makes copy of array with first element removed.
  let firstElement = [...array].shift();

  return firstElement;
};

// EXPORTS FUNCTION
module.exports = head;