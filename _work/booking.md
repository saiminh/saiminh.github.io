---
layout: page
type: portfolio
title: Booking.com
category: UX and Web Design
permalink: /work/booking
mainnav: hide
header_bg_image: ./img/work_booking/booking_hero.jpg
extra_classes: portfolio theme-booking
title_offset_y: 45vh
title_align: left
order: 4
---

<div class="wrapper">
	
	<div class="row row--aligncenter">		
		<div class="col-5">
			<div class="infobox">
				<h3>Client:</h3>
				<p><a href="www.booking.com">Booking.com</a></p>
				<h3>What I did:</h3>
				<ul>
					<li>Teamlead of the "Growth-hacking" team</li>
					<li>Product Design</li>
					<li>Prototyping</li>
					<li>Frontend development (HTML, CSS, JS, Perl)</li>
				</ul>

			</div>
		</div>
		<div class="col-5 offset-1">
			<p><span class="drop_cap">B</span>ooking.com is one of the biggest accommodation reservation services in the world. Each day, <em>over a million</em> room nights are reserved through its websites and apps.</p>
			<p>I worked on a multitude of projects, touching many of the company's products (websites, native apps, PWAs). Working at Booking requires basing all design decisions on collected user data.</p>
					
		</div>				
	</div>

	<div class="row">
		<div class="col-8 overflow offset-2">
			<div class="gallery-xscroll">
				{% for image in site.static_files %}
				    {% if image.path contains 'img/work_booking/screens' %}
				        {% comment %} <img src="{{ site.baseurl }}{{ image.path }}" alt="image" class="gallery-xscroll_img" /> {% endcomment %}
                        {% responsive_image_block %}
                        path: .{{ image.path }}
                        class: "gallery-xscroll_img"
{% endresponsive_image_block %}
				    {% endif %}
				{% endfor %}
			</div>
		</div>
	</div>

</div>