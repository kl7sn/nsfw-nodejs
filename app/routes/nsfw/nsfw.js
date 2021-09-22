const nsfwjs = require('nsfwjs')

const apiNsfw = (app, router) => {
    router.post('/check', async (req, res) => {
        const dataBytes = req.body
        let data = JSON.parse(dataBytes)
        // {"url":"xxx"}
        console.log("url", data.url)

        const img = new Image();
        img.crossOrigin = "anonymous";
        // some image here
        img.src =  data.url;

        // Load the model.
        nsfwjs.load().then((model) => {
            // Classify the image.
            model.classify(img).then((predictions) => {
                console.log("Predictions", predictions);
            });
        });

        res.json( data.url)
    })
}

module.exports = apiNsfw
