class Github {
  constructor() {
    (this.client_id = "bd7562f169db7e38efb1"),
      (this.client_secret = "5fc51ceb434cc49a36799e37dc178fe92e2037c6"),
      (this.repos_count = 5),
      (this.repos_sort = "created: asc");
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      // returning an object because we will also return their repos
      profile,
      repos,
    };
  }
}
