module.exports = function (grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/Intro.js', 'src/core/*.js', 'src/Outro.js'],
        dest: 'dist/microcontrol.js'
      }
    },
    jshint: {
      // esversion: 6.
      options: {
        node: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        eqnull: true,
        boss: true
      },
      all: {
        src: ['gruntfile.js', 'src/**/*.js', 'tests/**/*.js']
      }
    },
    nodeunit: {
      files: ['tests/**/*.js']
    },
    watch: {
      all: {
        files: ['gruntfile.js', 'src/**/*.js', 'src/**/*.jsx', 'tests/**/*.js'],
        tasks: ['jshint:all', 'concat']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('test', ['jshint', 'nodeunit']);
  grunt.registerTask('build', ['jshint', 'concat']);
  grunt.registerTask('default', ['build', 'watch']);
};
