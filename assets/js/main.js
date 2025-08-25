"use strict";

//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// ======= Navigation & UX Enhancements ======= //

// Back to top button functionality
window.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    const progressBar = document.getElementById('reading-progress');
    
    // Show/hide back to top button and update progress bar
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
        
        // Back to top button
        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Back to top button click handler
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Skip the back-to-top button as it's handled separately
            if (this.id === 'back-to-top') return;
            
            e.preventDefault();
            
            // Auto-collapse navbar on mobile after clicking nav link
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            
            if (navbarToggler && navbarCollapse && !navbarToggler.classList.contains('collapsed')) {
                // Check if we're on mobile (Bootstrap's collapse is active)
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate navbar height and add some padding
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const offset = navbarHeight + 20; // 20px extra padding
                
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Additional handler specifically for navbar links to ensure auto-collapse works
    document.querySelectorAll('.navbar-nav .nav-link[href^="#"]').forEach(navLink => {
        navLink.addEventListener('click', function() {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            
            // Auto-collapse navbar on mobile when clicking navigation links
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {toggle: false});
                bsCollapse.hide();
            }
        });
    });
    
    // Add loading animations for project cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.item.featured').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Toggle additional projects functionality
    const toggleBtn = document.getElementById('toggleMoreProjects');
    const additionalProjects = document.getElementById('additionalProjects');
    
    if (toggleBtn && additionalProjects) {
        toggleBtn.addEventListener('click', function() {
            const isHidden = additionalProjects.style.display === 'none';
            
            if (isHidden) {
                additionalProjects.style.display = 'block';
                this.innerHTML = '<i class="fas fa-minus"></i> Show Less Projects';
                // Smooth scroll to show the revealed content
                setTimeout(() => {
                    additionalProjects.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                additionalProjects.style.display = 'none';
                this.innerHTML = '<i class="fas fa-plus"></i> Show More Projects';
            }
        });
    }
});

/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

	const rss = new RSS(
	    document.querySelector("#rss-feeds"),
	    //Change this to your own rss feeds
        "https://medium.com/feed/@hossainkhan",
	    {
		     // how many entries do you want?
		    // default: 4
		    // valid values: any integer
		    limit: 3,
		    
		    
		    // will request the API via https
			// default: false
			// valid values: false, true
			ssl: true,
		  
			 // outer template for the html transformation
			// default: "<ul>{entries}</ul>"
			// valid values: any string
			layoutTemplate: "<div class='items'>{entries}</div>",
		
			// inner template for each entry
			// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
			// valid values: any string
			entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',
		    
	    }
	);
	rss.render();
