'use strict';
module.exports = function(gulp, plugins, config, name) { // eslint-disable-line func-names
    const theme     = config.themes[name],
        srcBase   = config.projectPath + 'var/view_preprocessed/frontools' + theme.dest.replace('pub/static', ''),
        stylesDir     = theme.stylesDir ? theme.stylesDir : 'styles';

    return gulp.src(config['projectPath'] + theme['src'] + '/**/icons/**/*.svg')
        .pipe(plugins.svgmin())
        .pipe(plugins.sassInlineSvg({
            destDir: config['projectPath'] + theme['src'] + '/' + stylesDir + '/svg'
        }))
        .pipe(plugins.logger({
            display   : 'name',
            beforeEach: 'Theme: ' + name + ' ',
            afterEach : ' Compiled!'
        }));
};
