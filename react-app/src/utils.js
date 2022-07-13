export const catches = {
    '1': {
        lng: -122.3,
        lat: 46.59},
    '2': {
        lng: -122.28,
        lat: 46.5},
    '3': {
        lng: -122.25,
        lat: 46.40},
}



// export function getAreaCatches (param, items) {
//     let itemArr = []
//     let paramSplit = param.split("&");
//     console.log(paramSplit)
//     let neLat = parseFloat(paramSplit[0].split('=')[1])
//     // itemArr.push(neLat)
//     console.log(neLat)
//     let neLng = parseFloat(paramSplit[1].split('=')[1])
//     // itemArr.push(neLng)
//     console.log(neLng)
//     let swLat = parseFloat(paramSplit[2].split('=')[1])
//     // itemArr.push(swLat)
//     console.log(swLat)
//     let swLng = parseFloat(paramSplit[3].split('=')[1])
//     // itemArr.push(swLng)
//     console.log(swLng)
//     let zoom = parseFloat(paramSplit[4].split('=')[1])

//     let itemValues = Object.values(items);
//     console.log('*********!!!***********')
//     console.log(itemValues)
//     itemValues.forEach((item, idx) => {
//         if (Math.ceil(item.lat) <= Math.ceil(neLat)) {
//             console.log(`${Math.ceil(item.lat)} is less than or equal to ${Math.ceil(neLat)}`)
//             console.log(`${idx} hit 1`)
//             if (Math.ceil(item.lng) <= Math.ceil(neLng)) {
//                 console.log(`${idx} hit 2`)
//                 if (Math.floor(item.lat) >= Math.floor(swLat)) {
//                     console.log(`${Math.ceil(item.lat)} is greater than or equal to ${Math.ceil(swLat)}`)
//                     console.log(`${idx} hit 3`)
//                     if (Math.floor(item.lng) >= Math.floor(swLng)) {
//                         console.log(`${idx} hit 5`)
//                         itemArr.push(item)
//                     }
//                 }
//             }
//         }
//     });
//     console.log(itemArr)
//     return itemArr
// }

export function getAreaCatches (param, items) {
    let coordArr = []
    let catchArr = []
    let paramSplit = param.split("&");
    console.log(paramSplit)
    let neLat = parseFloat(paramSplit[0].split('=')[1])

    console.log(neLat)
    let neLng = parseFloat(paramSplit[1].split('=')[1])

    console.log(neLng)
    let swLat = parseFloat(paramSplit[2].split('=')[1])

    console.log(swLat)
    let swLng = parseFloat(paramSplit[3].split('=')[1])



    let itemValues = Object.values(items);

    console.log('*********!!!***********')
    console.log(itemValues)

    itemValues.forEach((item, idx) => {
        if (Math.ceil(item.lat) <= Math.ceil(neLat)) {
            console.log(`${Math.ceil(item.lat)} is less than or equal to ${Math.ceil(neLat)}`)
            console.log(`${idx} hit 1`)
            if (Math.ceil(item.long) <= Math.ceil(neLng)) {
                console.log(`${idx} hit 2`)
                if (Math.floor(item.lat) >= Math.floor(swLat)) {
                    console.log(`${Math.ceil(item.lat)} is greater than or equal to ${Math.ceil(swLat)}`)
                    console.log(`${idx} hit 3`)
                    if (Math.floor(item.long) >= Math.floor(swLng)) {
                        console.log(`${idx} hit 5`)
                        let itemLatLong = {
                            lat: item.lat,
                            lng: item.long,
                        }
                        coordArr.push(itemLatLong)
                        catchArr.push(item)

                    }
                }
            }
        }
    });
    // console.log(itemArr)
    return [coordArr, catchArr]
}



// item.lng < neLng && item.lat > swLat && item.lng > swLng) {
//     itemArr.push(item)