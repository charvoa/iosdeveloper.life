class APIClient {
  static apiClientInstance = null

  static shared() {
    if (APIClient.apiClientInstance == null) {
      APIClient.apiClientInstance = new APIClient()
    }

    return APIClient.apiClientInstance;
  }

  reset() {
    this.apiClientInstance = null
  }

  async get(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      }
    })

    if (response.status === 200) {
      return await response.json()
    } else {
      return null
    }
  }
}

export default APIClient