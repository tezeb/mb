<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">

 {% include head.md %}

 <body style="overflow-y: scroll;" class="inner" >
   <div id="content">

    <article class="post">

      <header class="post-header">
        <h1 class="post-title">{{ page.title }}</h1>
      </header>

      <div class="post-content">
        {{ content }}
      </div>

      <div class="gallery">

      {% assign image_files = site.static_files | where: "thumb", true | where_exp: "image", "image.path contains page.img_dir" %}
      {% assign image_files = site.static_files | where: "thumb", true %}

      Image_files<br />
      {% for myimage in image_files %}
        {{ myimage.path }}
        <a href="{{ myimage.path | replace: 'thumbs', 'full' }}">
          <img src="{{ myimage.path }}" width="100px" height="100px" />
        </a><br />
      {% endfor %}

      </div>

    </article>
    {% comment %}
    {% for post in site.posts %}
    <div class="post">
     <div class="postTitle" ><h2>
      {% comment %}
        {% include title.md post=post %}
      {% endcomment %}
      <a href="{{ post.url }}">xXX {{ post.lat }}</a>
     </h2></div>
      <div class="entry">
      {% comment %}
       {% include gallery.md page=post separate_galleries='true' %}
      {% endcomment %}
      </div>
    </div>
    {% endfor %} 
    <script type="text/javascript">
    $('#content').lightGallery({
      mode: 'lg-fade',
      selector: '.single_img',
      download: false
    })
    </script>
    {% endcomment %}

   </div>
 </body>
</html>
