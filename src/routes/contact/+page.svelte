<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  
  const { homepage } = siteContent;
  const { contact } = homepage;
  
  // Form data state
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };
  
  // Handle form submission
  function handleSubmit(event: Event) {
    event.preventDefault();
    
    // Build email content
    const subject = `Stillness Power® Inquiry from ${formData.firstName} ${formData.lastName}`;
    
    let body = `Hello Stillness Power®,\n\n`;
    body += `I would like to get in touch regarding your wellness programs.\n\n`;
    body += `Contact Information:\n`;
    body += `Name: ${formData.firstName} ${formData.lastName}\n`;
    body += `Email: ${formData.email}\n`;
    if (formData.phone) {
      body += `Phone: ${formData.phone}\n`;
    }
    if (formData.interest) {
      body += `Interest: ${formData.interest}\n`;
    }
    body += `\nMessage:\n${formData.message}\n\n`;
    body += `Best regards,\n${formData.firstName} ${formData.lastName}`;
    
    // Create mailto URL
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
  }
</script>

<svelte:head>
  <title>Contact Us - Stillness Power®</title>
  <meta name="description" content="Get in touch with Stillness Power® and OM Studio Central. Located in North Chelmsford, MA." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d0?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">Contact</span>
          <span class="inline-block animate-slide-up text-orange-400" style="animation-delay: 0.5s;">Us</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl mb-12 text-purple-100 font-light max-w-3xl mx-auto">
          Ready to begin your wellness journey? We'd love to hear from you and help you find the perfect class or program.
        </p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
        <a href="#contact-info" class="btn btn-primary text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Contact Information & Form -->
<section id="contact-info" class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Contact Information -->
      <div class="animate-fade-in-up">
        <h2 class="text-5xl font-bold text-gray-900 mb-8">
          Get in Touch
        </h2>
        
        <!-- Studio Info -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50 mb-8">
          <div class="flex items-start mb-8">
            <div class="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-6 flex-shrink-0 shadow-xl">
              <Icon name="location_on" style="color: white;" size="32" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">OM Studio Central</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                {contact.address}
              </p>
            </div>
          </div>
          
          <div class="flex items-start mb-8">
            <div class="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-6 flex-shrink-0 shadow-xl">
              <Icon name="phone" style="color: white;" size="32" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Phone</h3>
              <a href="tel:{contact.phone}" class="text-purple-600 hover:text-purple-800 text-lg font-medium transition-colors">
                {contact.phone}
              </a>
            </div>
          </div>
          
          <div class="flex items-start mb-8">
            <div class="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-6 flex-shrink-0 shadow-xl">
              <Icon name="mail" style="color: white;" size="32" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Email</h3>
              <a href="mailto:{contact.email}" class="text-purple-600 hover:text-purple-800 text-lg font-medium transition-colors">
                {contact.email}
              </a>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mr-6 flex-shrink-0 shadow-xl">
              <Icon name="language" style="color: white;" size="32" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Website</h3>
              <a 
                href={contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-purple-600 hover:text-purple-800 text-lg font-medium transition-colors flex items-center gap-2"
              >
                OMStudioCentral.com
                <Icon name="open_in_new" style="color: currentColor;" size="20" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Hours Info -->
        <div class="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
          <div class="flex items-center gap-4 mb-6">
            <div class="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon name="schedule" style="color: white;" size="32" />
            </div>
            <h3 class="text-2xl font-bold">Studio Hours</h3>
          </div>
          <p class="text-purple-100 mb-2 text-lg">Daily classes available</p>
          <p class="text-purple-100 mb-6 text-lg">Please check our website for current schedule</p>
          <a 
            href="https://omstudiocentral.com/schedule-2/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 font-bold"
          >
            View Class Schedule
          </a>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div class="animate-fade-in-up" style="animation-delay: 0.3s;">
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50">
          <div class="text-center mb-8">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Icon name="send" style="color: white;" size="32" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p class="text-gray-700">We'll get back to you within 24 hours</p>
          </div>
          
          <form class="space-y-6" on:submit={handleSubmit}>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-lg font-bold text-gray-900 mb-3">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  bind:value={formData.firstName}
                  required
                  class="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label for="lastName" class="block text-lg font-bold text-gray-900 mb-3">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  bind:value={formData.lastName}
                  required
                  class="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-lg font-bold text-gray-900 mb-3">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                bind:value={formData.email}
                required
                class="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-lg font-bold text-gray-900 mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                bind:value={formData.phone}
                class="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
            </div>
            
            <div>
              <label for="interest" class="block text-lg font-bold text-gray-900 mb-3">
                I'm interested in...
              </label>
              <select
                id="interest"
                name="interest"
                bind:value={formData.interest}
                class="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              >
                <option value="">Select an option</option>
                <option value="traditional">Traditional Classes</option>
                <option value="aerial">Aerial Classes</option>
                <option value="virtual">Virtual Sessions</option>
                <option value="corporate">Corporate Wellness</option>
                <option value="nonprofit">Non-Profit Programs</option>
                <option value="general">General Information</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-lg font-bold text-gray-900 mb-3">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                bind:value={formData.message}
                required
                placeholder="Tell us about your wellness goals or any questions you have..."
                class="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical text-lg"
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="btn btn-primary w-full text-xl py-5 font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="relative py-24 bg-indigo-600 text-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-20"></div>
  
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold mb-6">Find Us</h2>
      <p class="text-xl text-indigo-200 max-w-3xl mx-auto">
        Located in the heart of North Chelmsford, Massachusetts at OM Studio Central
      </p>
    </div>
    
    <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20" style="animation-delay: 0.3s;">
      <div class="aspect-video relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.123456789!2d-71.3678123!3d42.6345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39eb123456789%3A0x123456789abcdef0!2s70%20Princeton%20St%20Suite%202%2C%20North%20Chelmsford%2C%20MA%2001863!5e0!3m2!1sen!2sus!4v1693824000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="OM Studio Central Location - 70 Princeton St, Suite 2, North Chelmsford, MA"
          class="rounded-3xl"
        ></iframe>
        <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="location_on" style="color: white;" size="20" />
            </div>
            <div>
              <h4 class="font-bold text-gray-900">OM Studio Central</h4>
              <p class="text-gray-600 text-sm">70 Princeton St, Suite 2</p>
              <p class="text-gray-600 text-sm">N Chelmsford, MA 01863</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="relative py-24 bg-orange-500 overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-10"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600"></div>

  <div class="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
    <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
      <h2 class="text-6xl font-bold mb-8 leading-tight">
        <span class="inline-block animate-slide-up">Frequently Asked</span>
        <span class="inline-block animate-slide-up text-purple-200" style="animation-delay: 0.3s;">Questions</span>
      </h2>
    </div>
    
    <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
      <p class="text-2xl mb-12 text-orange-100 font-light max-w-3xl mx-auto">
        Everything you need to know about starting your wellness journey with us.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      {#each [
        { 
          question: 'Do I need experience to join classes?', 
          answer: 'Not at all! All levels are welcome. We offer basic classes specifically designed to help beginners find confidence and get to know their body.',
          icon: 'help'
        },
        { 
          question: 'What should I bring to class?', 
          answer: 'Just bring yourself and comfortable clothing. We provide all necessary equipment including mats, props, and any aerial equipment needed.',
          icon: 'luggage'
        },
        { 
          question: 'Are there virtual class options?', 
          answer: 'Yes! We offer interactive virtual sessions that bring our holistic wellness practices directly to your home with personalized guidance.',
          icon: 'videocam'
        },
        { 
          question: 'Can you accommodate physical limitations?', 
          answer: 'Absolutely. Our instructors are experienced in adapting practices for various physical needs, including chair-based modifications when necessary.',
          icon: 'accessibility'
        }
      ] as faq, index}
        <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200/50" style="animation-delay: {(index + 1) * 0.2}s;">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Icon name="{faq.icon}" style="color: white;" size="24" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 text-left">
              {faq.question}
            </h3>
          </div>
          <p class="text-gray-700 text-lg leading-relaxed text-left">
            {faq.answer}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>