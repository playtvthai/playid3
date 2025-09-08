export const fetchShows = async () => {
    try {
        const response = await fetch('https://api.example.com/shows');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching shows:', error);
        throw error;
    }
};

export const fetchChannels = async () => {
    try {
        const response = await fetch('https://api.example.com/channels');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching channels:', error);
        throw error;
    }
};