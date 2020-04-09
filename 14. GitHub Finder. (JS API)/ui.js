class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    // Display profile and alert
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary p-1">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary p-1">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-sucess p-1">Public Repos: ${user.followers}</span>
                        <span class="badge badge-info p-1">Public Repos: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>    
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show repos
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary p-1">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary p-1">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-sucess p-1">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        // Output repositories
        document.querySelector('#repos').innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Show alert message
    showAlert(message, className) {
        // Clear remaining alerts
        this.clearAlert();

        // Create new alert
        const alert = document.createElement('div');
        alert.className = className;
        alert.appendChild(document.createTextNode(message));

        const containerUI = document.querySelector('.search-container');

        const search = document.querySelector('.search');

        containerUI.insertBefore(alert, search);

        // Clear alert after two seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}