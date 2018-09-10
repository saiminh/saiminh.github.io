---
layout: page_noheader
type: portfolio
title: Various Illustrations
subtitle: Homemade artisan craft filth
permalink: /work/illustration.html
mainnav: hide
header_bg_image: /img/hero-bg/psychpig.png
extra_classes: portfolio theme-illustrations-various
title_offset_y: 65vh
title_align: center
---

<div class="wrapper">
	<div class="row">
		<div class="col-6 offset-3">
			{% include psychpig.min.svg %}
		</div>
		
	</div>

	<div class="row">
		{% comment %}<div class="col-4">
			<h3>Supervillains</h3>
			<p><span class="drop_cap">T</span>his seemed like a good idea at the time as a series... It actually <strong>still</strong> does if I think about it. There's definitely a bunch more prospects.</p> 
			<p>In case it's not obvious: We've got May as Penguin, Erdogan as Wario, Putin as Dr. Evil and Trump as the Joker.</p>
		</div>
		<div class="col-8">
			<div class="row row--nested">
				<div class="col-6">					
					<img class="illustration_image" src="{{ '/img/work_illustrations-various/Penguin_May.jpg' | prepend: site.baseurl }}">					
				</div>
				<div class="col-6">					
					<img class="illustration_image" src="{{ '/img/work_illustrations-various/Erdogan_Wario.jpg' | prepend: site.baseurl }}">
				</div>
			</div>
			<div class="row row--nested">
				<div class="col-6">					
					<img class="illustration_image" src="{{ '/img/work_illustrations-various/putin_drevil.png' | prepend: site.baseurl }}">
				</div>
				<div class="col-6">					
					<img class="illustration_image" src="{{ '/img/work_illustrations-various/Trump_Joker.png' | prepend: site.baseurl }}">
				</div>
			</div>
		</div>{% endcomment %}

		<div class="col-4">
			<h1 class="page-title">Various Illustrations</h1>
			
			<p><span class="drop_cap">T</span>his is but a small selection of some my most precious little creations. <a href="https://www.instagram.com/skyfloter/">Follow me on instagram</a> to see them all!</p>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_illustrations-various' %}
		    	<div class="col-4">
			        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="grid_img" />
			    </div>
		    {% endif %}
		{% endfor %}
		
	</div>

	

	{% comment %}<div class="row">
		<div class="col-4">
			<h3>Machinegun Cupid</h3>
			<p><span class="drop_cap">W</span>hat if cupid had an automatic weapon instead of just a bow and arrow? This could be <a href="https://tinder.com/">tinder's</a> mascot maybe.</p>
		</div>
		<div class="col-8">			
			<img class="illustration_image" src="{{ '/img/work_illustrations-various/machineguncupid.png' | prepend: site.baseurl }}">				
		</div>

		
	</div>{% endcomment %}

</div>