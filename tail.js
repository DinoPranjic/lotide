const tail = function(array) {
  const remainingElements = [...array].slice(1); //removes first element

  return remainingElements;
};

module.exports = tail;