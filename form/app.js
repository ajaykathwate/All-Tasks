document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);

    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;

    const modalContent = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
  `;

    document.getElementById("modalContent").innerHTML = modalContent;
    document.getElementById("modal").classList.remove("hidden");
  });

// Reset form and close modal logic
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("surveyForm").reset();
});

document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("surveyForm").reset();

  const customAlert = document.createElement("div");
  customAlert.innerHTML = `
        <div class="mb-3 flex w-max items-center rounded-lg bg-green-400 px-4 py-2 text-green-800" role="alert">
            <div>
                Survey completed. <span class="font-medium">Thanks !</span> 
            </div>
        </div>
        `;

  //   document.body.appendChild(customAlert);
  const parentElement = document.getElementById("parentElement");
  parentElement.insertBefore(customAlert, parentElement.firstChild);

  setTimeout(function () {
    customAlert.remove();
  }, 5000);
});

document.getElementById("editModalBtn").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});
