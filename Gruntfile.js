module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style.css': 'style.scss'
                }
            } 
        },

        autoprefixer: {
            dist: {
                options: {
                    browsers: [
                        'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
                    ]
                },
                src: 'style.css',
                dest: 'style.css'
            }
        },

        concat: {
            dist: {
                src: [
                    'js/libs/jquery.min.js',
                    'js/libs/placeholders.js',
                    'js/page_scripts.js'
                ],
                dest: 'js/global.js',
            }
        },

        uglify: {
            build: {
                src: 'js/global.js',
                dest: 'js/global.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['css/**/*.scss', 'css/*.scss', 'style.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['js/**/*.js', 'js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            },
        }
    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'imagemin', 'watch']);

};