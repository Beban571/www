function countSmileys(arr) {
    matches = arr.join('').match(/[:;][-~]?[D)]/g);
    return matches ? matches.length : 0;
  }
  console.log(countSmileys([":D", ";-D", ";~D"]))