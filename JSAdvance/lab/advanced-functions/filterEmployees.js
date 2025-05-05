function filterEmployees(input, criteria) {
  let data = JSON.parse(input);

  if (criteria != "all") {
    const [criteriaKey, criteriaValue] = criteria.split("-");
    data = data.filter((obj) => obj[criteriaKey] == criteriaValue);
  }

  return data
    .map((emp, i) => `${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`)
    .join("\n");
}

console.log(
  filterEmployees(
    `[{

"id": "1",

"first_name": "Ardine",

"last_name": "Bassam",

"email": "abassam0@cnn.com",

"gender": "Female"

}, {

"id": "2",

"first_name": "Kizzee",

"last_name": "Jost",

"email": "kjost1@forbes.com",

"gender": "Female"

},

{

"id": "3",

"first_name": "Evanne",

"last_name": "Maldin",

"email": "emaldin2@hostgator.com",

"gender": "Male"

}]`,

    "gender-Female"
  )
);
