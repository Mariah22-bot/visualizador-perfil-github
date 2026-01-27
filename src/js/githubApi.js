export async function fetchGithubUser(userName) {
    const BASE_URL = 'https://api.github.com/users/';
    const response = await fetch(`${BASE_URL}${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return await response.json();
}
