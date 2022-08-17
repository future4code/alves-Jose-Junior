// import express, {Request, Response} from 'express'
// import cors from 'cors'



// app.get("/palylists/search", req: Request, res: Response) =>{
//     const name = req.query.name as string
//     const allplaylists = users.map((user) => {
//         return user.palylists
//     }).flat()
//     const result = allplaylists.filter((playlist) => {
//         return name? playlist.name.includes(name) : true;
//     })
// }

// res.send(result)

// app.post("/playlists", (req: Request, res: Response) => {
//     const { idUser, name } = req.body
//     const user = users.find((user) => user.id === idUser)

//     if(user){
//         user.playlists.push({
//             id: Date.now().toString(),
//             name: name,
//             tracks: []
//         })

//         res.send("Playlist foi criada")
//     }else{
//         res.status(400).send("Usuario não encontrado")
//     }
    
// })

// app.post("/playlists/:playlistId/tracks", (req: Request, res: Response) => {
    
//     const { name, artist, url } = req.body

//     const playlistId = req.params.playlistId
//     const userId = req.headers.authorization

//     const user = users.find((user) => user.id === userId)

//     if (user) {
//         const playlist = user.playlists.find((playlist) => {
//             return playlist.id === playlistId
//         })
//         if(playlist){
//             playlist.tracks.push({
//                 id: Date.now().toString(),
//                 name,
//                 artist,
//                 url
//             })
//             res.send("Track foi criada")
//         }else{
//             res.status(404).send("Playlist não encontrada")
//         }
//     } else {
//         res.status(404).send("Usuario não encontrado")
//     }

// })



// app.listen(3003, function(){

// })