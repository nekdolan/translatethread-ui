export default function({ $axios, redirect }, inject) {
    // Create a custom axios instance
    const netlify = $axios.create({
        headers: {
            common: {
                Accept: 'application/json, */*',
            }
        }
    })

    // Set baseURL to something different
    netlify.setBaseURL("https://translatethread.com/")
    // netlify2.setBaseURL("http://localhost:8080")

    // Inject to context as $netlify
    inject('netlifyf', netlify)
}