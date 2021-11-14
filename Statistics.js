class Statistics {
    constructor() {
        this.gameResults = [];
    }
    
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        // console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStats() {
        let games = this.gameResults.length
        let wins = this.gameResults.filter(result => result.win).length //przekazanie callback z warunkiem dla każdego indexu z true
        let losses = this.gameResults.filter(result => !result.win).length
        return [games, wins, losses];
    }

}

// const stats = new Statistics()