function checkStatus(...data) {
  let Name, Age, status_;
  //   for (i = 0; i < data.length; i++) {
  //       if (typeof data[i] === "string") {
  //         Name = data[i];
  //       }else if (typeof data[i] === "number") {
  //         Age = data[i];
  //       }else if (typeof data[i] === "boliean"){
  //         if (data[i] === true) {
  //             status = "available";
  //         }else{
  //             status = "not available";
  //         }
  //       }
  for (i = 0; i < data.length; i++) {
    typeof data[i] === "string"
      ? (Name = data[i])
      : typeof data[i] === "number"
      ? (Age = data[i])
      : data[i] === true
      ? (status_ = "available")
      : (status_ = "not available");
  }
  conslie.log(
    `Hello ${Name} your Age is (${Age}) and you are ${status_} for a job`
  );
}

//checkStatus("hossam", 38, false);
//checkStatus(35, false, "Ahmed");
checkStatus("maged", false, 38);
