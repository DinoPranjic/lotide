const tail = function(array) {
  let remainingElements = [...array].slice(1); //removes first element

  return remainingElements;
};

module.exports = tail;