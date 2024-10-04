export async function getUsers(username: string): Promise<any> {
    const url = `https://api.github.com/search/users?q=${username}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); 
        return data; 
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; 
    }
}
