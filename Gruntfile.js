module.exports = function (grunt) {
    // Initializing the configuration object
    grunt.initConfig({
        // Task configuration
        browserify: {
            dist: {
                files: {
                    'dist/tween-js.js': ['src/**/*.js']
                }
            },
            options: {
                browserifyOptions: {
                    paths: ['./node_modules', './src']
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/tween-js.min.js': ['dist/tween-js.js']
                }
            }
        },
        watch: {
            js: {
                files: [
                    //watched files
                    'src/**/*.js'
                ],
                tasks: ['browserify', 'uglify']
            }
        }
    });

    // Plugin loading
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('all', ['browserify', 'uglify'])
};