// Mock Top Kills
const killsList = document.getElementById('kills-list');
const topKills = [
    {name: 'Player1', kills: 120},
    {name: 'Player2', kills: 95},
    {name: 'Player3', kills: 80},
    {name: 'Player4', kills: 70},
    {name: 'Player5', kills: 50},
];

topKills.forEach(player => {
    const li = document.createElement('li');
    li.textContent = `${player.name} - ${player.kills} Kills`;
    killsList.appendChild(li);
});

// Fetch Minecraft server status
async function fetchServerStatus() {
    const ip = 'AzureSMPz.aternos.me';
    const port = 21847;

    try {
        const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await res.json();

        const playersOnline = data.players && data.players.online ? data.players.online : 0;
        document.getElementById('players-online').textContent = playersOnline;
    } catch (err) {
        console.error('Error fetching server status:', err);
        document.getElementById('players-online').textContent = 'Offline';
    }
}

// Refresh every 30 seconds
fetchServerStatus();
setInterval(fetchServerStatus, 30000);
