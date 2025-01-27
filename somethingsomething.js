const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const projectNameInput = document.getElementById("projectName")
const companyNameInput = document.getElementById("companyName")
const ProjectDescInput = document.getElementById("projectDescription")
const DepartmentInput = document.getElementById("department")
const messageInput = document.getElementById("message")
const fileAttachmentInput = document.getElementById("attachment")
const submissionInput = document.getElementById("submission")

submissionInput.addEventListener("click", async () => {

    const form = {
        fullname:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value,
        project_name: projectNameInput.value,
        company_name:companyNameInput.value,
        project_desc: ProjectDescInput.value,
        department: DepartmentInput.value,
        message: messageInput.value,
        file: null,
    }

    console.log(form)
    fetch('http://99.79.77.144:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
})


