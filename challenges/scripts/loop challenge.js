let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"],
  myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "Anwar",
    "Amina",
  ],
  teamNumber = 1;
document.write(`<div>we have ${myAdmins.indexOf("Stop")} teams: </div>`);
document.write(`<hr style="height:4px;background-clior:red;"}>`);
for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] !== "Stop") {
    document.write(`<div>`);
    document.write(
      `<p>The Admin for Team ${teamNumber++} is ${
        myAdmins[i]
      } and emplyees are: </p>`
    );
    let number = 1;
    for (j = 0; j < myEmployees.length; j++) {
      if (myEmployees[j][0] === myAdmins[i][0]) {
        document.write(`<p>-${number++}- ${myEmployees[j]}.</p>`);
      }
    }
    document.write(`<hr>`);
    document.write(`</div>`);
  } else {
    break;
  }
}
