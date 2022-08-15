const teams = ['Brooklyn Nets','Charlotte Hornets'];
const colors = [['Black', 'White'],['Turquoise', 'Purple']];
const players = [{
    'Alan Anderson': {
        'number': 0,
        'shoe': 16,
        'points': 22,
        'rebounds': 12,
        'assists': 12,
        'steals': 3,
        'blocks': 1,
        'slamDunks': 1,

    },
    'Reggie Evans': {
        'number': 30,
        'shoe': 14,
        'points': 12,
        'rebounds': 12,
        'assists': 12,
        'steals': 12,
        'blocks': 12,
        'slamDunks': 7,

    },
    'Brook Lopez': {
        'number': 11,
        'shoe': 17,
        'points': 17,
        'rebounds': 19,
        'assists': 10,
        'steals': 3,
        'blocks': 1,
        'slamDunks': 15,

    },
    'Mason Plumlee': {
        'number': 1,
        'shoe': 19,
        'points': 26,
        'rebounds': 12,
        'assists': 6,
        'steals': 3,
        'blocks': 8,
        'slamDunks': 5,

    },
    'Jason Terry': {
        'number': 31,
        'shoe': 15,
        'points': 19,
        'rebounds': 2,
        'assists': 2,
        'steals': 4,
        'blocks': 11,
        'slamDunks': 1,

    },
},

{
    'Jeff Adrien': {
        'number': 4,
        'shoe': 18,
        'points': 10,
        'rebounds': 1,
        'assists': 1,
        'steals': 2,
        'blocks': 7,
        'slamDunks': 2,

    },
    'Bismak Biyombo': {
        'number': 0,
        'shoe': 16,
        'points': 12,
        'rebounds': 4,
        'assists': 7,
        'steals': 7,
        'blocks': 15,
        'slamDunks': 10,

    },
    'DeSagna Diop': {
        'number': 2,
        'shoe': 14,
        'points': 24,
        'rebounds': 12,
        'assists': 12,
        'steals': 4,
        'blocks': 5,
        'slamDunks': 5,

    },
    'Ben Gordon': {
        'number': 8,
        'shoe': 15,
        'points': 33,
        'rebounds': 3,
        'assists': 2,
        'steals': 1,
        'blocks': 1,
        'slamDunks': 0,

    },
    'Brendan Haywood': {
        'number': 33,
        'shoe': 15,
        'points': 6,
        'rebounds': 12,
        'assists': 12,
        'steals': 22,
        'blocks': 5,
        'slamDunks': 12,

    },
}];


const gameObject = (indx1, indx2) => {
    let returnObj = {
        home: {
            teamname: teams[indx1],
            colors: colors[indx1],
            players: players[indx1],
        },
        away: {
            teamname: teams[indx2],
            colors: colors[indx2],
            players: players[indx2],
        },
    }
    return returnObj; 
};

const homeTeamName = () => {
    return gameObject(0,1).home.teamname;
};


const numPointsScored = (playerName) => {
    let game = gameObject(0,1);
    for (let teamType in game) {
        // console.log('team is '+teamType);
        let teamPlayers = game[teamType].players;
        // console.log('players are '+teamPlayers);
        for (let player in teamPlayers) {
            // console.log('player is '+player);
            if (player === playerName) {
                // console.log(player);
                return teamPlayers[player]['points'];
            }
        }
    }
};

const shoeSize = (playerName) => {
    let game = gameObject(0,1);
    for (let teamType in game) {
        let teamPlayers = game[teamType].players;
        for (let player in teamPlayers) {
            if (player === playerName) {
                return teamPlayers[player]['shoe'];
            }
        }
    }
};

const teamColors = (searchTeam) => {
    let game = gameObject(0,1);
    for (let teamType in game) {
        if (game[teamType].teamname === searchTeam) {
            // console.log('i found the right team');
            return game[teamType].colors;
        }
    }
};

const teamNames = () => {
    let game = gameObject(0,1);
    let teamArray = [];
    for (let teamType in game) {
        teamArray.push(game[teamType].teamname);
    }
    return teamArray;
};

const playerNumbers = (searchTeam) => {
    let game = gameObject(0,1);
    let numberArray = [];
    for (let teamType in game) {
        if (game[teamType].teamname === searchTeam) {
            let playerList = game[teamType].players;
            for (let player in playerList) {
                let playerInfo = playerList[player];
                numberArray.push(playerInfo['number']);
            }
            return numberArray;
        }
    }

};

const playerStats = (searchName) => {
    let game = gameObject(0,1);
    for (let teamType in game) {
        let teamPlayers = game[teamType].players;
        for (let player in teamPlayers) {
            if (player === searchName) {
                return teamPlayers[player];
            }
        }
    }
};

const bigShoeRebounds = () => {
    let game = gameObject(0,1);
    let highestSize = 0;
    let highSizePlayerRebounds = {};
    for (let teamType in game) {
        let teamPlayers = game[teamType].players;
        for (let player in teamPlayers) {
            let currentSize = shoeSize(player);
            if (currentSize > highestSize) {
                highestSize = currentSize;
                highSizePlayerRebounds = teamPlayers[player]['rebounds'];
                // console.log('best size so far is ' + highestSize)
                // console.log('rebounds of the big shoe guy currently ' + highSizePlayerRebounds)
            }
        }
    }
    return highSizePlayerRebounds;
};

const mostPointsScored = () => {
    let game = gameObject(0,1);
    let highestScore = 0;
    let highScorePlayer = '';
    for (let teamType in game) {
        let teamPlayers = game[teamType].players;
        for (let player in teamPlayers) {
            let currentScore = numPointsScored(player);
            if (currentScore > highestScore) {
                highestScore = currentScore;
                highScorePlayer = player;
            }
        }
    }
    return highScorePlayer;
};

const winningTeam = () => {
    let game = gameObject(0,1);
    let homeCounter = 0;
    let awayCounter = 0;
    for (let teamType in game) {
        let teamPlayers = game[teamType].players;
        for (let player in teamPlayers) {
            if (teamType === 'home') {
                homeCounter += numPointsScored(player);
            } else {
                awayCounter += numPointsScored(player);
            }
            
        }
    }
    if (homeCounter > awayCounter) {
        return `The home team-- ${game['home'].teamname} win with ${homeCounter} points!`;
    } else if (awayCounter > homeCounter) {
        return `The away team-- ${game['home'].teamname} win with ${awayCounter} points!`;
    } else {
        return 'It\'s a draw';
    }
};

const playerWithLongestName = () => {
    let game = gameObject(0,1);
    let longestName = '';
    for (let teamType in game) {
        let teamPlayers = game[teamType].players;
        for (let player in teamPlayers) {
            if (player.length > longestName.length) {
                longestName = player
            }
        }
    }
    return `${longestName} has the longest name at ${longestName.length} characters!`;
};



// tests
console.log('The game object looks like ' + gameObject(0,1) + '.');
console.log('The home team is the ' + homeTeamName() + '.');
console.log('Brendan Haywood\'s point total is ' + numPointsScored('Brendan Haywood') + '!');
console.log('Brendan Haywood has a shoe size of ' + shoeSize('Brendan Haywood') + '.');
console.log('The Net\'s team colors are ' + teamColors('Brooklyn Nets') + ' for some reason as an array.');
console.log('The team names are ' + teamNames() + ' also as an array.');
console.log('The Nets player numbers are ' + playerNumbers('Brooklyn Nets') + ' as an array.');
console.log('The stats for Brendan are ' + playerStats('Brendan Haywood') + '.');
console.log('The player with the biggest shoe has a rebound count of ' + bigShoeRebounds() + '!');
console.log('The player with the most points scored is ' + mostPointsScored()+'.');
console.log(winningTeam())
console.log(playerWithLongestName());
