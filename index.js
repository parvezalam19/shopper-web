const testimonialBtn = document.getElementById('testimonial-btn');
  const shopperBtn = document.getElementById('shopper-btn');
  const testimonialContainer = document.getElementById('testimonial-container');
  const shopperContainer = document.getElementById('shopper-container');



  testimonialBtn.addEventListener('click', () => {
    testimonialContainer.style.display = 'block';
    shopperContainer.style.display = 'none';
    testimonialBtn.classList.add('active');
    shopperBtn.classList.remove('active');
  });

  shopperBtn.addEventListener('click', () => {
    shopperContainer.style.display = 'flex';
    testimonialContainer.style.display = 'none';
    shopperBtn.classList.add('active');
    testimonialBtn.classList.remove('active');
  });



  shopperBtn.addEventListener('click', function() {
    shopperContainer.classList.remove('d-none');
  });