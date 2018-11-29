'use strict';
module.exports = function(gulp, plugins, config, name) { // eslint-disable-line func-names
    const theme     = config.themes[name],
        srcBase   = config.projectPath + 'var/view_preprocessed/frontools' + theme.dest.replace('pub/static', ''),
        stylesDir     = theme.stylesDir ? theme.stylesDir : 'styles';

    return gulp.src(config['projectPath'] + theme['src'] + '/**/icons/fonts/*.svg')
        .pipe(plugins.iconfontCss({
            fontName: 'icons', // nom de la fonte, doit être identique au nom du plugin iconfont
            targetPath: '../../styles/fonts/fonts.scss', // emplacement de la css finale
            fontPath:  '../fonts/' // emplacement des fontes finales
        }))
        .pipe(plugins.iconfont({
            prependUnicode: true,
            formats: ['ttf', 'eot', 'woff', 'svg'],
            fontName: 'icons',
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest(
            config['projectPath'] + theme['src'] + '/web/fonts'
        ))
        .pipe(plugins.logger({
            display   : 'name',
            beforeEach: 'Theme: ' + name + ' ',
            afterEach : ' Compiled!'
        }));
};
