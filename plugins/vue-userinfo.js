export default function({ $axios, redirect }, inject) {
    // Create a custom axios instance
    const userinfo = $axios.create({
        headers: {
            common: {
                Accept: 'application/json, */*',
            }
        }
    })

    // Set baseURL to something different
    userinfo.setBaseURL("https://webhook.translatethread.com")

    inject('userinfo', userinfo)
}