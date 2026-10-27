const form = document.getElementById("mathForm");
const tableInput = document.getElementById("table");
const result = document.getElementById("result");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const table = Number(tableInput.value);

    result.innerHTML = "";
    error.textContent = "";

    if (
        tableInput.value.trim() === "" ||
        !Number.isInteger(table) ||
        table < 1 ||
        table > 100000000
    ) {
        error.textContent = "Please enter a whole number between 1 and 100000000.";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("div");

        row.className = "table-row";

        const equation = document.createElement("span");
        equation.textContent = `${table} × ${i} = `;

        const answer = document.createElement("strong");
        answer.textContent = table * i;

        row.appendChild(equation);
        row.appendChild(answer);

        result.appendChild(row);
    }
});
