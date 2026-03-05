document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.querySelector('.email-signup');
    const emailInput = document.querySelector('.email-signup input');

    // 1. Email Form Validation
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        
        if (validateEmail(emailValue)) {
            alert(`Success! Redirecting to setup for: ${emailValue}`);
        } else {
            showError("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(message) {
        alert(message);
    }

    // 2. FAQ Accordion Toggle Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Close all other open items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});