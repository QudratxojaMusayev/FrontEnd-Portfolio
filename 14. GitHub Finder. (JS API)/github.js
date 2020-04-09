class GitHub {
    constructor() {
        this.client_id = '63f1d843c1148771ec93';
        this.client_secret = '3760c6cf8cdc3a3389a42308320955a33bd719f8';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(userName) {
        const profileResponse = await fetch(`https://api.github.com/users/${userName}`)
        const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }
}