module.exports = function(grunt) {
    // https://github.com/postcss/autoprefixer
    grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 30 versions']
                    })
                ]
            },
            dist: {
                src: '*.css'
            }
        }
    });

    grunt.registerTask('default', ['postcss:dist']);
};

