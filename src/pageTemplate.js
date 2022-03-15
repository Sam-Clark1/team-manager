const generateCards = data => {
    let cardsArray = [];

    data.forEach(employee => {
        const {name, id, email, role, github, officeNumber, school} = employee;
        let specificAttr = '';
        let specificAttrValue;

        if (github){
            specificAttr = 'Github';
            specificAttrValue = `<a href=https://github.com/${github}>${github}</a>`
        } else if (school) {
            specificAttr = 'School';
            specificAttrValue = school;
        }else {
            specificAttr = 'Office Number';
            specificAttrValue = officeNumber;
        };

        let card = `
        <div class="column is-3">
            <div class="card">
                <div class="card-header has-background-info">
                    <p class="card-header-title has-text-white is-size-4">
                        ${name}
                    </p>
                    <p class="card-header-title has-text-white is-size-5">
                        ${role}
                    </p>
                </div>
                <div class="card-content">
                    <p class="content is-size-5">
                        ID:  ${id} 
                    </p>
                    <p class="content is-size-5">
                        Email: </br>
                        <a href="mailto:${email}">${email}</a>
                    </p>
                    <p class="content is-size-5">
                        ${specificAttr} </br>
                        ${specificAttrValue}
                    </p>
                </div>
            </div>
        </div>
        `;

        cardsArray.push(card);

    });
    return cardsArray.join('');
};


module.exports = data => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Manager</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class="hero is-primary">
        <div class="hero-body">
            <p class="title is-1 has-text-centered">
                My Team
            </p>
        </div>
    </header>

    <section>
        <div class="columns m-2">
            ${generateCards(data)}
        </div>
    </section>
</body>
</html>
    `
};