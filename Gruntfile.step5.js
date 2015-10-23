module.exports = function(grunt) {
    // https://www.npmjs.com/package/grunt-available-tasks
    grunt.initConfig({
        availabletasks: {           // task 
            tasks: {}               // target 
        }
    });
    grunt.registerTask('default', ['greet:Lars', 'addNum:7:2']);
    grunt.registerTask('greet', function(name) {
        grunt.log.writeln("Hejsan " + name);
    });
    grunt.registerTask('addNum', 'Add 2 numbers', function(n1, n2) {
        n1 = Number(n1);
        n2 = Number(n2);
        if (isNaN(n1) || isNaN(n2)) {
            grunt.warn("Båda argumenten måste vara ett tal.")
        } else {
            var answer = n1 + n2;
            grunt.log.writeln(n1 + " + " + n2 + " = " + answer)
        }
    });
    grunt.loadNpmTasks('grunt-available-tasks');
}

