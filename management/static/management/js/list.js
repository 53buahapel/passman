document.addEventListener('DOMContentLoaded', function() {
  // Handle toggle password visibility
  const toggleButtons = document.querySelectorAll('.toggle-password');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const wrapper = this.closest('.password');
      const hiddenSpan = wrapper.querySelector('.password-hidden');
      const visibleSpan = wrapper.querySelector('.password-visible');
      const eyeIcon = this.querySelector('.eye-icon');
      const eyeOffIcon = this.querySelector('.eye-off-icon');
      
      // Toggle password visibility
      if (hiddenSpan.style.display !== 'none') {
        hiddenSpan.style.display = 'none';
        visibleSpan.style.display = 'inline';
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'inline';
      } else {
        hiddenSpan.style.display = 'inline';
        visibleSpan.style.display = 'none';
        eyeIcon.style.display = 'inline';
        eyeOffIcon.style.display = 'none';
      }
    });
  });

  // Handle copy functionality
  const copyButtons = document.querySelectorAll('.icon[data-content]');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-content');
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Add animation class to show feedback
          this.classList.add('spin-anim');
          
          // Remove animation class after animation completes
          setTimeout(() => {
            this.classList.remove('spin-anim');
          }, 800);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  });
});
