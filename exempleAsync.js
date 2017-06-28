// Callbacks

f1 (params, (err, ok) => {
    if(err) return console.log(err)
    console.log("foo")
    f2 (params, (err, ok) => {
        if(err) return console.log(err)
        console.log("bar")
        f3 (params, (err, ok) => {
            if(err) return console.log(err)
            console.log("baz")
        })
    })
    f4 (params, (err, ok) => {
        if(err) return console.log(err)
        console.log("lorem")
    })
})
f5 (params, (err, ok) => {
    if(err) return console.log(err)
    console.log("ipsum")
})



// Promises

f1 (params).then(ok => {
    f2 (params).then(ok => {
        f3 (params).then(ok => {

        })
    })
    f4 (params).then(ok => {

    })
})


async function funcioAmbUnaPromise () {
    try {
        let ok = await f5 (params)
    } catch (error) {
        console.log(error)
    }

    // .catch(e => console.log(e))

}










function f1(params) {
    return new Promise((resolve, reject) => {
        laOperacioQueTardaMolt
            .then(a => resolve())
            .catch(a => reject())
    })
}
