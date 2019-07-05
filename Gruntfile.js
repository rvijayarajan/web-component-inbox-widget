module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcInboxWidgetTemplates',
					standalone: true
				},
				cwd: '.',
				src: ['inbox-widget.html'],
				dest: 'wcinboxwidgettemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['wcinboxwidgettemplates.js', 'index.js'],
		      dest: 'dist/wcinboxwidget.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['ngtemplates','concat']);
};