async function getEvents() {
    const url = "events.json"
    try {

        /* checks for errors */
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        /* decides what to do with the response */
        const result = await response.json();
        console.log(result);
    }
        /* otherwise it throws errors */
        catch (error) {
        console.error(error.message);
    }
}