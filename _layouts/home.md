---
layout: default
---

<div id="posts">
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
</div>
<div id="new_load_more">
<script type="text/javascript">
  var data=null;
  var post_cnt={{ counter }};
  function preloadNextImg() {
    for (i = 0; i < 4 && post_cnt + i < data.length; i++) {
      var post = data[post_cnt + i];
      setTimeout(function() {
                 new Image().src = post.img;
                 }, 100);
    }
  }
  function showPosts() {
    if (data != null) {
      for (i = 0; i < 4 && post_cnt < data.length; i++) {
        console.log(`i: ${i}, post_cnt: ${post_cnt}`);
        var post = data[ post_cnt ];
        //  TODO: enable tags
        post.tag = Array();
        var post_html=`<div class="new_post hidden_post"> ${ post_cnt%2 == 1 ? '<div class="wide spacer"></div>' : '' }
    <div class="new_post_first" >
      <a href="${ post.url }"><img src="${ post.img }" /></a>
      <!--<div class="tags">
        <a href="/lista_postów_z_tagiem">#${ post.tag }</a>
      </div>-->
      <header class="post-header">
        <a href="${ post.url }"><h1 class="post-title">${ post.title }</h1></a>
      </header>
      <div id="new_post_excerpt">
        ${ post.excerpt }
        ${ post.more ? '<span class="more"><a href="{{ post.url }}">&#x203A;&nbsp;czytaj dalej</a></span>' : ''}
      </div>
    </div>
    ${ post_cnt%2 == 0 ? '<div class="wide spacer"></div>' : '' }
  </div>`;

        $('#posts').append(post_html);
        post_cnt += 1;
      }
      $('#posts > div.hidden_post').slideDown("slow", function() {
        $(this).css({display: "flex"});
      });
      if ( post_cnt >= data.length ) {
        $('#new_load_more').slideUp();
      }
      else {
        preloadNextImg();
      }
    }
  }
  function loadMore() {
    if(data == null) {
      setTimeout(loadMore, 100);
      return;
    }
    showPosts();
  }
  $(document).ready(function(){
    if(data == null) {
      $.ajax('/posts.json', {
        success: function (json) {
          data = json;
          preloadNextImg();
        }
      });
    }
  })
</script>
<a onclick="javascript:loadMore();">&#x00BB;&nbsp;więcej postów</a>
</div>
