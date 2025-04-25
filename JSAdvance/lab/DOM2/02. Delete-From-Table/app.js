function deleteByEmail() {
  const inputEl = document.querySelector("input[name=email]");
  console.log(inputEl.value);
  
  const result = document.getElementById("result");

  const emailsTable = Array.from(
    document.querySelectorAll("#customers tbody tr")
  );

  const found = emailsTable.find((tr) => {
    const emailRowValue = tr.getElementsByTagName('td')[1].textContent;
    return inputEl.value === emailRowValue;
  })

  
  if (found) {
    found.remove()
    result.textContent = 'Deleted.'
  } else {
    result.textContent = 'Not found.'
  }

  inputEl.value = ''


}
