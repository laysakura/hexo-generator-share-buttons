var sbSocialsDefault = [
    'hatenablog',
    'twitter',
];

var sbConfig = hexo.config.share_buttons || {},
    sbSocials = sbConfig.socials || sbSocialsDefault;


hexo.extend.tag.register('share_button', function(args){
return '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">' +
        '<!--シェアボタン-->' +
'<div class="share-flat">' +
'<span style="font-size: 8px">シェアする</span>' +
'<div class="share-flat-inner">' +
'<!--はてブ-->' +
'<a href="http://b.hatena.ne.jp/entry/' + encodeURIComponent(this.post.permalink) + '" class="hatena-bookmark-button" target="_blank" data-hatena-bookmark-title="{Title}" data-hatena-bookmark-layout="simple" title="このエントリーをはてなブックマークに追加">' +
'    <i class="lsf lsf-icon" title="hatenabookmark"></i>' +
'    <br>' +
'    <span class="hatebu-count small-text">' +
'        <i class="fa fa-spinner fa-spin"></i>' +
'    </span>' +
'</a>' +
'</div>' +
'</div>';

    ;
});
