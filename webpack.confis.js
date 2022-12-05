module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/")
      
    }
  }
}