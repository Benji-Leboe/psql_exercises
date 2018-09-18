function lookup(query, db){
  let lookupResults = [];
  db.query('SELECT CONCAT(first_name, \' \', last_name) AS person FROM famous_dickheads WHERE first_name LIKE $1 OR last_name LIKE $1', [query], (err, result) => {
    if (err) {
      return console.error("Query Error:", err);
    }
    
    for(let entry of result.rows){
      lookupResults.push(entry);
    }

    db.end();
    return lookupResults;
  });
  
}

module.exports = lookup;