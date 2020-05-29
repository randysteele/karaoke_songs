class Songs {
    constructor(){
        this.songs = []
        this.adapter = new SongsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadSongs()

    }
    fetchAndLoadSongs(){
        this.adapter.getSongs().then(songs => {
           return console.log(songs) 
        })
        .then(() => {
            this.render()

        })
    }

    render() {


    }
}