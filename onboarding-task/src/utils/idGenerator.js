const getNextId = (function() {
  let nextId = 0;

  return () => nextId++;
})();

export default getNextId;
