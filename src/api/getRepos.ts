export async function getRepos(url: string): Promise<any> {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            if(response.status === 403) {
                throw new Error(`Sorry, GitHub is not responding :-(`);
            } else {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        }

        const data = await response.json(); 
        return data; 
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; 
    }
}
