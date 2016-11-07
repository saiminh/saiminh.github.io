---
layout: page
type: portfolio
title: University of Liverpool
subtitle: Online degree programs
permalink: /work/liverpool.html
mainnav: show
header_bg_image: /img/hero-bg/liverpool.jpg
extra_classes: portfolio theme-liverpool
title_offset_y: 60vh
title_align: center
---

<div class="wrapper">
	
	<div class="row row-overlap raster">		
	
		<div class="col-6">
			<h3>Housestyle</h3>
			<p><span class="drop_cap">T</span>he Online degrees of the renowned University of Liverpool needed their own housestyle to appeal to their global target audience.</p>
				<ul class="quick_info_box_list">
					<li>Development of the housestyle</li>
					<li>Design of an icon family</li> 
					<li>Production of a styleguide</li>

				</ul>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_liverpool/housestyle' %}
		    	<div class="col-6">
		    		<a href="{{ site.baseurl }}{{ image.path }}" class="fluidbox-link">
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="grid_img" />
			        </a>
			    </div>
		    {% endif %}
		{% endfor %}
			
	</div>

	<div class="row">		
		<div class="col-8">
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_liverpool/online' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
		</div>
		<div class="col-4 col-text">
			<h3>Website</h3>
			<p><span class="drop_cap">T</span>he website of the University Online Degrees doubles as an information portal for prospective as well as active students and as a lead capture platform.</p>
			<ul class="quick_info_box_list">
				<li>Wireframing</li>
				<li>Development of prototype</li>
				<li>Visual Design</li>
				<li>Frontend development</li>
			</ul>
		</div>
	</div>

	<div class="row raster">		
		
		<div class="col-6 col-text">
			<h3>Offline marketing material</h3>
			<p><span class="drop_cap">U</span>sing our own guidelines, we produced some example brochures and promotional material to be used in the many infosessions the University organizes across the world.</p>
		</div>

		{% for image in site.static_files %}
		    {% if image.path contains 'img/work_liverpool/print' %}
		    	<div class="col-6">
			        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="grid_img" />
			    </div>
		    {% endif %}
		{% endfor %}

	</div>

</div>