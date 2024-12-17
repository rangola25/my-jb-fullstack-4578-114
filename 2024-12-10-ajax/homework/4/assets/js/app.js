"use strict";

(() => {

    const getData = (url) => {
        // const response = await fetch(url)
        // const users = await response.json()
        // return users
        return fetch(url).then(response => response.json())
    }

    const generateAmountInAlbumHTML = photos => {
        const newAmount = photos
            .reduce((cumulative, current) => {
                const { albumId } = current

            let existingObjectIndex = cumulative.findIndex(photo => photo.albumId === current.albumId)
            if(existingObjectIndex === -1) {
                cumulative.push({
                    albumId,
                    id: 0,
                })
                existingObjectIndex = cumulative.findIndex(photo => photo.albumId === current.albumId)
            }
            console.log(existingObjectIndex)
            cumulative[existingObjectIndex].id += 1
            return cumulative
            }, [])
            .map(photo => { 
                 return `
                <tr>
                    <td>${photo.albumId}</td>
                    <td>${photo.id}</td>
                </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
            
        return newAmount
    }

    const generateHTML = photos => {
        const newHTML = photos
            .filter(photo => photo.id<=100)
            .map(photo => {
                const { albumId, id, title, thumbnailUrl  } = photo // deconstruction
                return `
                    <tr>
                        <td>${albumId}</td>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td><img src="${thumbnailUrl}"></td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '')
        return newHTML
    }

    const renderAmountInAlbumHTML = newHTML => document.getElementById('amount').innerHTML = newHTML

    const renderHTML = newHTML => document.getElementById('photos').innerHTML = newHTML

    document.getElementById('button').addEventListener('click', async () => {
        try {

            // get data
            const photos = await getData('https://jsonplaceholder.typicode.com/photos')

            // generate html
            const newAmount =  generateAmountInAlbumHTML(photos)
            const newHTML = generateHTML(photos)
            

            // render html
            renderAmountInAlbumHTML(newAmount)
            renderHTML(newHTML)
            
        } catch (e) {
            console.warn(e)
        }
    })

})()


