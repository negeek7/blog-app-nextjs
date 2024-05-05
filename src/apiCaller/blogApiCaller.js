export async function getBlogApiCaller(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function createNewBlogApiCaller(url = "", payload = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    });
    return response.json();
  }