var sbSocialsDefault = [
    'hatenablog',
    'twitter',
];

var sbConfig = hexo.config.share_buttons || {},
    sbSocials = sbConfig.socials || sbSocialsDefault;

hexo.extend.helper.register('share_buttons', function (options) {
    var postUrl = options.postUrl;
    var postTitle = options.postTitle;

    return '' +
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">' +  // TODO FontAwsomeも埋め込み検討

        '<div class="share-flat">' +
        '  <div class="share-flat-inner">' +

        '    <!--はてブ-->' +
        '    <a href="http://b.hatena.ne.jp/entry/' + encodeURIComponent(postUrl) + '" class="hatena-bookmark-button" target="_blank" data-hatena-bookmark-title="' + postTitle + '" data-hatena-bookmark-layout="simple" title="Add to Hatena Bookmark">' +  // TODO このタイトルアトリビュートもカスタマイズ可能にする
        '      <i class="lsf lsf-icon" title="hatenabookmark"></i>' +
        '      <br>' +
        '      <span class="hatebu-count small-text">' +
        '        <i class="fa fa-spinner fa-spin"></i>' +
        '      </span>' +
        '    </a>' +
        '  </div>' +
        '</div>';
});
