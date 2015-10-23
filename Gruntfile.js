module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
                    }),
                    require('cssnano')
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    src: '*.css',
                    dest: 'fixed/'
                }]
            }
        }, // postcss
        watch: {
            styles: {
                files: ['*.css'],
                tasks: ['postcss']
            }
        }
        
    });

    // grunt.registerTask('default', ['watch']);
};

