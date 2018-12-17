/*
 * grunt-markdown-pdf
 * https://github.com/alanshaw/grunt-markdown-pdf
 *
 * Copyright (c) 2013 Alan Shaw
 * Licensed under the MIT license.
 */

var markdownpdf = require("markdown-pdf")
  , path = require("path")
  , async = require("async")

module.exports = function (grunt) {

  grunt.registerMultiTask("markdownpdf", "Convert Markdown documents to PDF", function () {

    var opts = this.options()
      , done = this.async()

    // Create the tasks to process the targets
    var tasks = this.files.map(function (f) {

      return function (cb) {

        grunt.log.warn('We are here')
    })

    async.parallel(tasks, function (er, targetDestPaths) {
      if (er) return grunt.warn(er)

      targetDestPaths.forEach(function (destPaths) {
        destPaths.forEach(function(destPath) {
          grunt.log.ok(destPath)
        })
      })

      done()
    })
  })
}