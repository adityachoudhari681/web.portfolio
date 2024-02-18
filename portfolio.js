// Three Blocks no. changing Animation

document.addEventListener('DOMContentLoaded', function () {
    // Function to animate counting from 0 to a specific number
    function animateCount(element, targetCount) {
      var currentCount = 0;
      var increment = targetCount / 50; // Adjust the increment for smoother animation
  
      function updateCount() {
        currentCount += increment;
        element.innerText = Math.round(currentCount);
  
        if (currentCount < targetCount) {
          requestAnimationFrame(updateCount);
        }
      }
  
      updateCount();
    }
  
    // Get the elements by their IDs
    var projectCountElement = document.getElementById('projectCount');
    var followerCountElement = document.getElementById('followerCount');
    var certificationCountElement = document.getElementById('certificationCount');
  
    // Set the target counts for each block
    var targetProjectCount = 5;
    var targetFollowerCount = 500;
    var targetCertificationCount = 20;
  
    // Animate the counts on page load
    animateCount(projectCountElement, targetProjectCount);
    animateCount(followerCountElement, targetFollowerCount);
    animateCount(certificationCountElement, targetCertificationCount);
  });
  
// Scroll Btn
document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    function scrollToTop() {
        // Calculate the scroll distance
        var scrollStep = window.scrollY / 20;

        function scrollAnimation() {
            if (window.scrollY > 0) {
                // Scroll by the step
                window.scrollBy(0, -scrollStep);
                // Request the next frame
                requestAnimationFrame(scrollAnimation);
            } else {
                // Reset the button display to none when scrolling is at the top
                scrollToTopBtn.style.display = 'none';
            }
        }

        // Start the animation
        requestAnimationFrame(scrollAnimation);
    }

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', scrollToTop);
});

// Share this page : 

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
