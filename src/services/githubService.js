import APIClient from "./apiclient"

class GithubContributor {
  constructor(login, name, company, bio, contributions, avatar_url, location, html_url) {
    this.login = login;
    this.name = name;
    this.company = company;
    this.bio = bio;
    this.contributions = contributions;
    this.avatar_url = avatar_url;
    this.location = location;
    this.html_url = html_url;
  }
}

class GithubService {
  static async getContributorsList() {
    const contributorsList = await APIClient.shared().get("https://api.github.com/repos/charvoa/iosdeveloper.life/contributors")

    var contributors = []

    const promises = contributorsList.map(async (element) => {
      const contributor = await APIClient.shared().get(element.url)
      contributors.push(new GithubContributor(element.login, contributor.name, contributor.company,
        contributor.bio, element.contributions, element.avatar_url, contributor.location, contributor.html_url))
    })

    await Promise.all(promises)

    return contributors.sort(function (a, b) { return a.contributions - b.contributions })
  }
}

export default GithubService