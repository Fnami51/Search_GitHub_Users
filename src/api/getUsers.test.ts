import { getUsers } from './getUsers';

describe('getUsers', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return data on successful fetch', async () => {
        const mockResponse = { items: [{ login: 'testuser', id: 1 }] };
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse),
        });

        const username = 'testuser';
        const data = await getUsers(username);

        expect(fetch).toHaveBeenCalledWith(`https://api.github.com/search/users?q=${username}`, {
            method: 'GET',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        });
        expect(data).toEqual(mockResponse);
    });

    it('should throw an error on non-2xx responses', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        const username = 'nonexistentuser';

        await expect(getUsers(username)).rejects.toThrow('Error: 404 Not Found');
    });

    it('should log and throw an error on network failure', async () => {
        console.error = jest.fn(); 
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

        const username = 'testuser';

        await expect(getUsers(username)).rejects.toThrow('Network error');
        expect(console.error).toHaveBeenCalledWith('Fetch error:', expect.any(Error));
    });
});
``
