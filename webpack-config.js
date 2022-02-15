const glob = require("glob")
const path = require("path")

let entries = {}
glob.sync("./entries/*.js").map(file => {
    let name = file.split("/")[2].split(".")[0]
    entries[name] = file
})

module.exports = {
    mode: "development",
    entry: entries,
    output: {
        filename: "javascripts/[name]-[hash].js",
        path: path.resolve(__dirname, "../public/assets"),
    },
}