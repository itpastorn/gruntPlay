module.exports = function(grunt) {
    grunt.registerTask('doBoth', ['greet:Lars', 'addNum:7:2']);
    grunt.registerTask('greet', function(name) {
        grunt.log.writeln("Hejsan " + name);
    });
    grunt.registerTask('addNum', function(n1, n2) {
        n1 = Number(n1);
        n2 = Number(n2);
        if (isNaN(n1) || isNaN(n2)) {
            grunt.warn("Båda argumenten måste vara ett tal.")
        } else {
            var answer = n1 + n2;
            grunt.log.writeln(n1 + " + " + n2 + " = " + answer)
        }
    });
}

