<script lang="ts">
  import { siteContent } from '$lib/data/content';
  
  const { homepage } = siteContent;
  const { contact } = homepage;
</script>

<svelte:head>
  <title>Contact Us - Stillness Power®</title>
  <meta name="description" content="Get in touch with Stillness Power® and OM Studio Central. Located in North Chelmsford, MA." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-brand-violet/10 via-brand-lavender/5 to-brand-sky/10 py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        Contact Us
      </h1>
      <p class="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
        Ready to begin your wellness journey? We'd love to hear from you and help you find the perfect class or program.
      </p>
    </div>
  </div>
</section>

<!-- Contact Information & Form -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Contact Information -->
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl mb-8">
          Get in Touch
        </h2>
        
        <!-- Studio Info -->
        <div class="card p-8 mb-8">
          <div class="flex items-start mb-6">
            <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-violet to-brand-lavender flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-brand-black mb-2">OM Studio Central</h3>
              <p class="text-brand-gray">
                {contact.address}
              </p>
            </div>
          </div>
          
          <div class="flex items-start mb-6">
            <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-sky to-brand-lavender flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-brand-black mb-2">Phone</h3>
              <a href="tel:{contact.phone}" class="text-brand-violet hover:text-brand-lavender transition-colors">
                {contact.phone}
              </a>
            </div>
          </div>
          
          <div class="flex items-start mb-6">
            <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-lavender to-brand-sky flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-brand-black mb-2">Email</h3>
              <a href="mailto:{contact.email}" class="text-brand-violet hover:text-brand-lavender transition-colors">
                {contact.email}
              </a>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-violet to-brand-sky flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3l3 3" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-brand-black mb-2">Website</h3>
              <a 
                href={contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-brand-violet hover:text-brand-lavender transition-colors"
              >
                OMStudioCentral.com →
              </a>
            </div>
          </div>
        </div>
        
        <!-- Hours Info -->
        <div class="bg-gray-50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-brand-black mb-4">Studio Hours</h3>
          <p class="text-brand-gray mb-2">Daily classes available</p>
          <p class="text-brand-gray mb-4">Please check our website for current schedule</p>
          <a 
            href={contact.website} 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-outline text-sm"
          >
            View Class Schedule
          </a>
        </div>
      </div>
      
      <!-- Contact Form -->
      <div>
        <div class="card p-8">
          <h2 class="text-2xl font-bold text-brand-black mb-6">Send us a Message</h2>
          
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-brand-black mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-brand-black mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-brand-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-brand-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent"
              />
            </div>
            
            <div>
              <label for="interest" class="block text-sm font-medium text-brand-black mb-2">
                I'm interested in...
              </label>
              <select
                id="interest"
                name="interest"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent"
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
              <label for="message" class="block text-sm font-medium text-brand-black mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell us about your wellness goals or any questions you have..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-violet focus:border-transparent resize-vertical"
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="btn btn-primary w-full text-lg py-4"
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
<section class="py-24 bg-gray-50">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
        Find Us
      </h2>
      <p class="mt-6 text-lg text-brand-gray">
        Located in the heart of North Chelmsford, Massachusetts
      </p>
    </div>
    
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="aspect-video bg-gray-200 flex items-center justify-center">
        <div class="text-center">
          <svg class="h-16 w-16 text-brand-violet mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p class="text-brand-gray">
            Interactive map would be embedded here
          </p>
          <p class="text-sm text-brand-gray mt-2">
            70 Princeton St, Suite 2, N Chelmsford, MA 01863
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-24 bg-brand-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
        Frequently Asked Questions
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-brand-black mb-3">
          Do I need experience to join classes?
        </h3>
        <p class="text-brand-gray">
          Not at all! All levels are welcome. We offer basic classes specifically designed to help beginners find confidence and get to know their body.
        </p>
      </div>
      
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-brand-black mb-3">
          What should I bring to class?
        </h3>
        <p class="text-brand-gray">
          Just bring yourself and comfortable clothing. We provide all necessary equipment including mats, props, and any aerial equipment needed.
        </p>
      </div>
      
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-brand-black mb-3">
          Are there virtual class options?
        </h3>
        <p class="text-brand-gray">
          Yes! We offer interactive virtual sessions that bring our holistic wellness practices directly to your home with personalized guidance.
        </p>
      </div>
      
      <div class="card p-6">
        <h3 class="text-lg font-semibold text-brand-black mb-3">
          Can you accommodate physical limitations?
        </h3>
        <p class="text-brand-gray">
          Absolutely. Our instructors are experienced in adapting practices for various physical needs, including chair-based modifications when necessary.
        </p>
      </div>
    </div>
  </div>
</section>