<script lang="ts">
  import { socialLinks } from '$lib/data/content';
  import Icon from './Icon.svelte';
  import SocialIcon from './SocialIcon.svelte';
  import { asset } from '$lib/utils/paths';
</script>

<footer class="bg-gray-900 text-white">
  <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
      <!-- Brand Section -->
      <div class="lg:col-span-2">
        <div class="flex items-center space-x-3 mb-4">
          <img
            class="h-10 w-auto"
            src={asset("/images/logo.png")}
            alt="Stillness Power"
          />
          <span class="text-lg font-headline text-white font-bold">
            Stillness Power®
          </span>
        </div>
        <p class="text-gray-300 max-w-md">
          Dedicated to providing communities with meditative and prayerful approach to holistic health and wellness through various education programs.
        </p>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
          Contact
        </h3>
        <div class="space-y-3 text-gray-300">
          <div>
            <p class="font-medium">OM Studio Central</p>
            <p class="text-sm">70 Princeton St, Suite 2</p>
            <p class="text-sm">North Chelmsford, MA 01863</p>
          </div>
          <div>
            <a 
              href="tel:{socialLinks.phone}"
              class="text-brand-sky hover:text-brand-lavender transition-colors"
            >
              {socialLinks.phone}
            </a>
          </div>
          <div>
            <a 
              href="mailto:{socialLinks.email}"
              class="text-brand-sky hover:text-brand-lavender transition-colors"
            >
              {socialLinks.email}
            </a>
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
          Quick Links
        </h3>
        <div class="space-y-2">
          <a href="/classes" class="block text-gray-300 hover:text-brand-sky transition-colors">
            Classes
          </a>
          <a href="/about" class="block text-gray-300 hover:text-brand-sky transition-colors">
            About Us
          </a>
          <a href="/partners" class="block text-gray-300 hover:text-brand-sky transition-colors">
            Partnerships
          </a>
          <a href="/testimonials" class="block text-gray-300 hover:text-brand-sky transition-colors">
            Testimonials
          </a>
          <a href="/contact" class="block text-gray-300 hover:text-brand-sky transition-colors">
            Contact
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="mt-8 border-t border-gray-700 pt-8">
      <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <p class="text-gray-400 text-sm">
          © {new Date().getFullYear()} Stillness Power®. All rights reserved.
        </p>
        
        <!-- Social Media Links -->
        <div class="flex items-center space-x-6">
          <div class="flex space-x-4">
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-transform duration-200"
              aria-label="Follow Sanjyot on LinkedIn"
            >
              <SocialIcon platform="linkedin" size="24" />
            </a>
            <a 
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-transform duration-200"
              aria-label="Follow Stillness Power on Instagram"
            >
              <SocialIcon platform="instagram" size="24" />
            </a>
            <a 
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-transform duration-200"
              aria-label="Follow Stillness Power on Facebook"
            >
              <SocialIcon platform="facebook" size="24" />
            </a>
          </div>
          <div class="hidden lg:block w-px h-6 bg-gray-600"></div>
          <a 
            href={socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            class="text-brand-sky hover:text-brand-lavender transition-colors text-sm"
          >
            Visit OM Studio Central →
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>