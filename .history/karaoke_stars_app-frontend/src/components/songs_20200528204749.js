class Songs {
    constructor(){
        this.songs = []
        this.adapter = new SongsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadSongs()

    }
    fetchAndLoadSongs(){
        this.adapter.getSongs().then(songs => {
            songs.forEach(song => this.song.push(song))
           return console.log(songs) 
        })
        .then(() => {
            this.render()

        })
    }

    render() {
        const songsContainer = document.getElementById('songs-container')
        songsContainer.innerHTML = 'my songs are here!!!'
    }
}