// Search input
const searchUserUI = document.querySelector('#search-user');
// Init github
const gitHub = new GitHub();
// Init UI
const ui = new UI();

// Search input event listener
searchUserUI.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        gitHub.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});