export async function getBlogApiCaller(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error, "Get Blogs API Error")
    }
}

export async function createNewBlogApiCaller(url = "", payload = {}) {
    try {
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
    } catch (error) {
        console.log(error, "Create New Blog API Error")
    }
  }

export async function updateBlogPostApiCaller(url = '', payload = {}) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error, "Update Blog API Error")
    }
}

export async function deleteBlogPostApiCaller(url = '', payload = {}){
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error, "Delete Blog API Error")
    }

}