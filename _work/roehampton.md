---
layout: page
type: portfolio
title: University of Roehampton
category: Designing a fully online study experience
subtitle: Designing a fully online study experience
permalink: /work/roehampton
mainnav: hide
header_bg_image: /img/work_roehampton/uor_hero.png
extra_classes: portfolio theme-roehampton
---

<div class="wrapper">
	<div class="row row--aligncenter">
		<div class="col-4">
			<div class="infobox">
				<h3>Client:</h3>
				<p><a href="#">University of Roehampton London</a>/<a href="https://laureate.net">Laureate Online Education</a></p>
				<h3>What I did:</h3>
				<ul>
					<li>Housestyle</li>
					<li>Website design</li>
					<li>Progressive Web App design</li>
				</ul>
			</div>
		</div>
		<div class="col-6 offset-1">
			<p><span class="drop_cap">F</span>or this UK University's brand of E-Learning programmes, I developed a housestyle, a website, a student onboarding app/social network as well as the online classroom interface.</p>
		</div>
	</div>
	<div class="row">	
		<div class="col-6">
			<img alt="alternative text" src="{{ "/img/work_roehampton/housestyle/00-uor-brand-towerbridge.jpg" | prepend: site.baseurl }}" class="img--framed" />
		</div>
		<div class="col-4 offset-1">
			<h3>Housestyle</h3>
			<p><span class="drop_cap">T</span>he team developed a distinct visual style under my lead. 
			We aimed to support the brand message "Inspiring Possibilities" by introducing blue squares as key visual elements that appear in various animations and images throughout the material.</p>			
		</div>

	</div>

	<div class="row">		
		<div class="col-12"><h3>Online experiences</h3></div>		
	</div>
	<div class="row row--aligncenter">
		<div class="col-4">
			<h4>Website</h4>
			<p><span class="drop_cap">O</span>ne of the first touchpoints of the student's journey is the <a href="http://online.roehampton.ac.uk/">official website</a>. Here prospective students learn more about the requirements and offers of the e-learning platform.</p> 
		</div>
		<div class="col-7 offset-1">
			<img alt="alternative text" src="{{ '/img/work_roehampton/online/03-uor-website-home.png' | prepend: site.baseurl }}"  />
		</div>
	</div>
	<div class="row row--aligncenter">
		<div class="col-4">
			<h4>Onboarding app</h4>
			<p><span class="drop_cap">F</span>or new and aspiring Roehampton students we produced a progressive web app that helped them with the sometimes complicated application and onboarding process.</p>
		</div>
		<div class="col-7 offset-1">
			<img alt="alternative text" src="{{ '/img/work_roehampton/online/00-uor-website-mobile03.png' | prepend: site.baseurl }}"  />
		</div>
	</div>
	<div class="row row--aligncenter">
		<div class="col-4">
			<h4>Inspirenet, a social network for the online students</h4>
			<p><span class="drop_cap">O</span>nce they are signed up, students are encouraged to join inspirenet, a social network where they can interact with each other, create groups and find peers to share their study experience with.</p> 
		</div>
		<div class="col-7 offset-1">
			<img alt="alternative text" src="{{ '/img/work_roehampton/online/02-uor-inspirenet-01.jpg' | prepend: site.baseurl }}"  />
		</div>
	</div>
	<div class="row row--aligncenter">
		<div class="col-4">
			<h4>The online classroom</h4>
			<p><span class="drop_cap">O</span>nce they are signed up, students are encouraged to join inspirenet, a social network where they can interact with each other, create groups and find peers to share their study experience with.</p> 
		</div>
		<div class="col-7 offset-1">
			<img alt="alternative text" src="{{ '/img/work_roehampton/online/uor-classroom-01.jpg' | prepend: site.baseurl }}"  />
		</div>
	</div>

	{% comment %}<div class="row row--aligncenter">		

		<div class="col-8 overflow">
			<div class="gallery-xscroll h360 gallery-print">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_roehampton/print' %}
				        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" />
				    {% endif %}
				{% endfor %}
			</div>
			<em class="illustration_caption">All material is produced in a square shape to fit with the theme.</em>
		</div>

		<div class="col-4 col-text">
			<h3>Promotional brochures</h3>
			<p><span class="drop_cap">W</span>e produced some example brochures and promotional material to be given out at events like the campus graduation or alumni meetings.</p>
		</div>

		
	</div>{% endcomment %}
</div>