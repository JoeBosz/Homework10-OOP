export default function htmlTemplate(teamArr) {
  const html = (arr) => `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
  ${arr.join("")}
</body>
</html>`;
  const createManagerHtml = (manager) => `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email ${manager.email}</li>
    <li class="list-group-item">Name ${manager.name}</li>
    <li class="list-group-item">Office Number ${manager.officeNumber}</li>
  </ul>
</div>`;
  const createengineerHtml = (engineer) => `
<div class="card" style="width: 18rem;">
<div class="card-header">
  Engineer
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${engineer.id}</li>
  <li class="list-group-item">Email ${engineer.email}</li>
  <li class="list-group-item">Name ${engineer.name}</li>
  <li class="list-group-item">Github ${engineer.github}</li>
</ul>
</div>`;
  const createinterHtml = (intern) => `
<div class="card" style="width: 18rem;">
<div class="card-header">
  Intern
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${intern.id}</li>
  <li class="list-group-item">Email ${intern.email}</li>
  <li class="list-group-item">Name ${intern.name}</li>
  <li class="list-group-item">School ${intern.school}</li>
</ul>
</div>`;
  const teamHtml = [];
  teamArr.forEach((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        teamHtml.push(createManagerHtml(employee));
        break;
      case "Engineer":
        teamHtml.push(createengineerHtml(employee));
        break;
      case "Intern":
        teamHtml.push(createinterHtml(employee));
        break;
    }
  });
  return html(teamHtml);
}
