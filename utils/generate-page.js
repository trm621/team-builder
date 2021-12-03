const generatePage = teamMateInfo => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
</head>
<body>
<main>
<h1 class="banner">My Team</h1>
<div class="card-section">
    <div class="card">
        <div class="card-header"> 
        ${teamMateInfo.name} </br>
        ${teamMateInfo.role} </div>
        <div class="team-info"> 
        ${teamMateInfo.id}
        ${teamMateInfo.email}
        ${teamMateInfo.officeNumber}
    </div>
</div>

</body>
</html>
    `
}

module.exports = generatePage;