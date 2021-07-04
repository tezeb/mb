---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
map: false
mapClass: fullVis
mainClass: hidden
layout: rowery21
---

<div id="posts">

{% for post in site.categories.borneo %}

<div class="post">
    <a href="{{ post.url }}"><img src="/{{ post.img_dir | replace: "SIZE", "thumbs" }}/{{ post.img_hd }}" />
	<div>
		{{ post.date | date: "%d.%m.%Y" }}<br />
		<span class="fat">{{ post.title }}</span><br />
		<div id="new_post_excerpt">
		  {% assign tmp = post.excerpt | split : '<!--more_start-->' %}
		  {{ tmp[1] | default: tmp[0] }}
		  {% comment %}
		  {% if post.excerpt != post.content %}
		  <span class="more"><a href="{{ post.url }}">&#x203A;&nbsp;czytaj dalej</a></span>
		  {% endif %}
		  {% endcomment %}
		</div>
	</div>
	</a>
</div>


{% endfor %}

</div>
