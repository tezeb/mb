---
layout: default
---

{% assign counter = 0 %}
{% for post in site.posts limit:4 %}
<div class="new_post">
  {% assign cmod = counter | modulo: 2 %}
  {% if cmod == 1 %}
  <div class="wide spacer">
    {% if counter == 1 %}
      <div id="new_go_to_insta">
      <a href="https://instagram.com/malgosia_and_bartek" target="_blank" title="Obserwuj&nbsp;nas&nbsp;na&nbsp;instagramie!">
        Obserwuj&nbsp;nas&nbsp;na&nbsp;instagramie!
      </a>
      </div>
    {% endif %}
  </div>
  {% endif %}
  <div class="new_post_first" >
    <a href="{{ post.url }}"><img src="{{ post.img_dir | replace: "SIZE", "full" }}/{{ post.img_hd }}" /></a>
    <div class="tags">
      {% for tag in post.categories %}
      <a href="/lista_postów_z_tagiem">#{{ tag }}</a>
      {% endfor %}
    </div>
    <header class="post-header">
      <a href="{{ post.url }}"><h1 class="post-title">{{ post.title }}</h1></a>
    </header>
    <div id="new_post_excerpt">
      {% assign tmp = post.excerpt | split : '<!--more_start-->' %}
      {{ tmp[1] | default: tmp[0] }}
      {% if post.excerpt != post.content %}
      <span class="more"><a href="{{ post.url }}">&#x203A;&nbsp;czytaj dalej</a></span>
      {% endif %}
    </div>
  </div>
  {% if cmod == 0 %}
  <div class="wide spacer">
    {% if counter == 0 %}
    <div id="new_go_to_map">
      <a href="/map.html">
        Wejdź<br/>na mapę<br/>i zobacz<br/>gdzie teraz<br/>jesteśmy!
      </a>
    </div>
    {% endif %}
  </div>
  {% endif %}
</div>
{% assign counter = counter | plus: 1 %}
{% endfor %}
<div id="new_load_more">
<script type="text/javascript">
  var data=null;
  var post_cnt=4;
  function loadMore() {
    wip();
    return;
    if(data == null) {
    /*
      $.ajax({
        url: getProtocol() + 'vimeo.com/api/v2/video/' + video.id + '.json',
        dataType: 'jsonp',
        success: function (json) {
          dataFrame.thumbsReady = true;
          updateData(data, {img: json[0].thumbnail_large, thumb: json[0].thumbnail_small}, dataFrame.i, fotorama);
        }
      });
      */
    }
    else {
      alert('just display it');
    }
  }
</script>
<a onclick="javascript:loadMore();">&#x00BB;&nbsp;więcej postów</a>
</div>
