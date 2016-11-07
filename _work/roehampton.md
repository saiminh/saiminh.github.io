---
layout: page
type: portfolio
title: University of Roehampton London
subtitle: Designing a fully online study experience
permalink: /work/roehampton.html
mainnav: hide
header_bg_image: /img/hero-bg/roehamtpon.png
extra_classes: portfolio theme-roehampton
title_offset_y: 40vh
title_align: center
---

<div class="wrapper">
	
	<div class="row">		
		
		<div class="col-4 col-text">
			<h3>Housestyle</h3>
			<p><span class="drop_cap">T</span>he team developed a distinct visual style under my lead. 
			We aimed to support the brand message "Inspiring Possibilities" by introducing blue squares as key visual elements that appear in various animations and images throughout the material.</p>			
		</div>
		<div class="col-8">
			<img alt="alternative text" src="{{ "/img/work_roehampton/housestyle/00-uor-brand-towerbridge.jpg" | prepend: site.baseurl }}" class="grid_img" />
		</div>

	</div>

	<div class="row">				

		<div class="col-4 col-text">
			<h3>Online experiences</h3>
			<p><span class="drop_cap">F</span>or Roehampton students the team produced not only a website with student info and sign-up process, but also several in-program apps like a social communication tool called inspirenet. We also designed the online classroom's experience.</p>
		</div>

		<div class="col-8">
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_roehampton/online' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
		</div>

	</div>

	<div class="row">		

		<div class="col-4 col-text">
			<h3>Promotional brochures</h3>
			<p><span class="drop_cap">W</span>e produced some example brochures and promotional material to be given out at events like the campus graduation or alumni meetings.</p>
			<p><em>All material is produced in a square shape to fit with the theme.</em></p>
		</div>

		<div class="col-8">
			<div class="gallery-xscroll h360">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_roehampton/print' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
		</div>
	</div>
</div>