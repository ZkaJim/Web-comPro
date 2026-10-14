// const body = document.body

// const getData = async () => {
    
//     const res = await fetch("https://dummyjson.com/products")
//     const data = await res.json()

//     console.log(data)

//     const dataMap = data.products.map(function(items) {
//         return`
//            <h1 class="text-red-500">${items.title}</h1>
//            <span>${items.description}</span>
//         `
//     })
//     body.innerHTML = dataMap.join("")
// }

// getData()