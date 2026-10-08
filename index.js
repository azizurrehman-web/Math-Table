function gettable() {
 let table = document.getElementById("table").value;
 let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${table} X ${i} = ${table*i}<br>`;
  }
    document.getElementById("result").innerHTML = result;
}
