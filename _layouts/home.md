---
layout: default
---

{% assign counter = 0 %}
{% for post in site.posts limit:2 %}
<div class="new_post">
  {% if counter == 1 %}
  <div id="new_go_to_insta" class="wide">
		<div>
    <span>
      Obserwuj&nbsp;nas&nbsp;na&nbsp;instagramie!
    </span>
		</div>
  </div>
  {% endif %}
  <div class="new_post_first" >
    <a href="{{ post.url }}"><img src="{{ post.img_dir | replace: "SIZE", "full" }}/{{ post.img_hd }}" /></a>
    <div id="tags">
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
  {% if counter == 0 %}
  <div id="new_go_to_map" class="wide">
    <span>
      Wejdź<br/>na mapę<br/>i zobacz<br/>gdzie teraz<br/>jesteśmy!
    </span>
  </div>
  {% endif %}
</div>
{% assign counter = counter | plus: 1 %}
{% endfor %}
