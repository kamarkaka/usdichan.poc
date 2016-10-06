module.exports = function(grunt) {
	var BUILD = {'PATH': '/usdichan.poc/'};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			prebuild: {
				src: ['build/']
			},
			postbuild: {
				src: ['.sass-cache/']
			}
		},
		compass: {
			dist: {
				options: {
					httpPath: BUILD.PATH,
					sassDir: 'src/scss',
					cssDir: 'build/css',
					imagesDir: 'build/images',
					javascriptsDir: 'build/javascript',
					fontsDir: 'build/fonts',
					sourcemap: true
				}
			}
		},
		copy: {
			dist: {
				files: [
					{expand: true, cwd: 'src/fonts/', src: '**', dest: 'build/fonts/'},
					{expand: true, cwd: 'src/images/', src: '**', dest: 'build/images/'},
					{expand: true, cwd: 'src/videos/', src: '**', dest: 'build/videos/'}
				]
			}
		},
		cssmin: {
			dist: {
				options: {
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'build/css',
					src: ['*.css'],
					dest: 'build/css',
				}]
			}
		},
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'src/javascript',
					src: '**/*.js',
					dest: 'build/javascript'
				}]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean:prebuild','copy','compass','cssmin', 'uglify','clean:postbuild']);
	grunt.registerTask('cleanup', ['clean:prebuild']);
};