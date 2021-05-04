export function About() {
    return (
        <div className="form-container">
            <h2>About</h2>
            <div>
                <p>I am Vasil Lozanov and this is a custom app that I made. Here you can create/read/update/delete cooking recipes.</p>
                <p>It uses ReactJS as frontend and DjangoRestFramework as a backend REST API.</p>
            </div>
            <Link label="My linkedIn profile:" link="https://www.linkedin.com/in/vasil-lozanov-5a1b0a18a/" />
            <ComponentLinks title="Backend Application" repoLink="https://github.com/lozanov95/CookingAppBackend" hostedLink="https://cooking-app-backend-vasil-loz.herokuapp.com/api/recipes/" />
            <ComponentLinks title="Frontend Application" repoLink="https://github.com/lozanov95/CookingAppFrontendReactJS" hostedLink="https://cooking-app-frontend-vasil-loz.herokuapp.com/" />
        </div>
    )
}

function ComponentLinks(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <Link link={props.repoLink} label="Repo: " />
            <Link link={props.hostedLink} label="Hosted on the following link: " />
        </div>
    )
}

function Link(props) {
    return (
        <div>
            <label>{props.label}</label>
            <a href={props.link}>
                {props.link}
            </a>
        </div>
    )
}