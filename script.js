//Password Matching

function printCurrPass() {
  let currPass = document.getElementById("password");
  let confPass = document.getElementById("password-confirm");
  const passErr = document.getElementById("passErr");
  const submitClicked = document.querySelector("#sign-up-submit");

  submitClicked.addEventListener("click", function () {
    if (confPass.value !== currPass.value) {
      passErr.style.display = "block";
    } else {
      passErr.style.display = "none";
    }
  });
}

printCurrPass();
