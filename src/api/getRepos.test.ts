import { getRepos } from './getRepos';

describe('getRepos', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return data on successful fetch', async () => {
        const mockResponse = [{ name: 'repo1', owner: { login: 'user1' } }];
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse),
        });

        const url = 'https://api.github.com/users/user1/repos';
        const data = await getRepos(url);

        expect(fetch).toHaveBeenCalledWith(url, { method: 'GET' });
        expect(data).toEqual(mockResponse);
    });

    it('should throw an error on 403 response', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 403,
            statusText: 'Forbidden',
        });

        const url = 'https://api.github.com/users/user1/repos';

        await expect(getRepos(url)).rejects.toThrow('Sorry, GitHub is not responding :-(');
    });

    it('should throw error on other non-2xx responses', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        const url = 'https://api.github.com/users/user1/repos';

        await expect(getRepos(url)).rejects.toThrow('Error: 404 Not Found');
    });

    it('should throw an error on network failure', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

        const url = 'https://api.github.com/users/user1/repos';

        await expect(getRepos(url)).rejects.toThrow('Network error');
    });
});
