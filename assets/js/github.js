class Github{
    async getUser(username){
        let responseProfile = await fetch(`https://api.github.com/users/${username}`);
        let profile = await responseProfile.json();
        return {
            profile
        }
    }
}