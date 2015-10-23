module.exports = function(grunt) {
    grunt.registerTask('greet', function(name) {
        grunt.log.writeln("Hejsan " + name);
    });
}

