module.exports = {
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                use: "svelte-loader"
              }
        ]
    },
    output: {
        hashFunction: "xxhash64"
    }
};