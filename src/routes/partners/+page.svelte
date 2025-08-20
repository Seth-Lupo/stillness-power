<script lang="ts">
  import { siteContent } from '$lib/data/content';
  import Icon from '$lib/components/Icon.svelte';
  
  const { partners } = siteContent;
</script>

<svelte:head>
  <title>{partners.title} - Stillness Power®</title>
  <meta name="description" content="Partner with Stillness Power® to deliver holistic wellness programs to your organization or community." />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[60vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-blue-900/70"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-6xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span class="inline-block animate-slide-up" style="animation-delay: 0.3s;">{partners.title}</span>
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <p class="text-xl md:text-2xl mb-12 text-purple-100 font-light max-w-3xl mx-auto">
          {partners.subtitle}
        </p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
        <a href="#partnership-types" class="btn btn-primary text-xl px-10 py-5 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
          Explore Partnership Options
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Partnership Types -->
<section id="partnership-types" class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold text-gray-900 mb-8">Partnership Options</h2>
      <p class="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Choose the partnership model that best fits your organization's needs and goals.
      </p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-16">
      <!-- Corporate Partnerships -->
      <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl">
            <Icon name="business" style="color: white;" size="32" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            Corporate Wellness
          </h2>
        </div>
        
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Bring holistic wellness to your workplace with our comprehensive corporate programs designed to reduce stress, improve focus, and enhance employee well-being.
        </p>
        
        <div class="space-y-4 mb-8">
          {#each [
            'On-site wellness sessions',
            'Stress reduction workshops', 
            'Team building activities',
            'Flexible scheduling options'
          ] as feature}
            <div class="flex items-center">
              <div class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-gray-700">{feature}</span>
            </div>
          {/each}
        </div>
        
        <a href="/contact" class="btn btn-primary text-lg px-8 py-4 w-full">
          Discuss Corporate Programs
        </a>
      </div>
      
      <!-- Non-Profit Partnerships -->
      <div class="animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-purple-100/50" style="animation-delay: 0.2s;">
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl">
            <Icon name="favorite" style="color: white;" size="32" />
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            Non-Profit Programs
          </h2>
        </div>
        
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          {partners.nonprofit.description}
        </p>
        
        <div class="space-y-4 mb-8">
          {#each [
            'One-time workshops',
            'Sustainable long-term programs',
            'Member & non-member access',
            'Community-focused approach'
          ] as feature}
            <div class="flex items-center">
              <div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-gray-700">{feature}</span>
            </div>
          {/each}
        </div>
        
        <a href="/contact" class="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 w-full">
          Explore Non-Profit Options
        </a>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="relative py-24 bg-indigo-600 text-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-20"></div>
  
  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-5xl font-bold mb-6">How Partnership Works</h2>
      <p class="text-xl text-indigo-200 max-w-3xl mx-auto">
        Our simple process to bring Stillness Power® programs to your organization.
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      {#each [
        { number: '1', title: 'Initial Consultation', description: 'We discuss your organization\'s needs, goals, and preferred program structure during a comprehensive consultation.', color: 'from-purple-500 to-pink-500' },
        { number: '2', title: 'Custom Program Design', description: 'We create a tailored wellness program that fits your schedule, space, and participant needs.', color: 'from-blue-500 to-indigo-600' },
        { number: '3', title: 'Program Implementation', description: 'Our certified instructors deliver high-quality sessions while you track progress and participant satisfaction.', color: 'from-orange-500 to-red-500' }
      ] as step, index}
        <div class="group animate-slide-up bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-center" style="animation-delay: {index * 0.2}s;">
          <div class="bg-gradient-to-br {step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-all duration-300 shadow-xl">
            <span class="text-2xl font-bold text-white">{step.number}</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">{step.title}</h3>
          <p class="text-indigo-200 text-lg leading-relaxed">{step.description}</p>
          <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full h-1 bg-gradient-to-r {step.color} rounded-full"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="relative py-24 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-5"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="animate-fade-in-up">
        <h2 class="text-5xl font-bold text-gray-900 mb-8">
          Partnership Benefits
        </h2>
        <p class="text-xl text-gray-700 leading-relaxed mb-8">
          When you partner with Stillness Power®, you're investing in proven wellness practices that create lasting positive change.
        </p>
        
        <div class="space-y-6">
          {#each [
            { icon: 'psychology', title: 'Reduced Stress & Anxiety', description: 'Proven techniques for managing workplace stress and promoting mental wellness.', color: 'text-purple-600' },
            { icon: 'trending_up', title: 'Increased Productivity', description: 'Enhanced focus and clarity leading to improved performance and job satisfaction.', color: 'text-blue-600' },
            { icon: 'groups', title: 'Stronger Team Cohesion', description: 'Shared wellness experiences that build stronger relationships and team unity.', color: 'text-orange-600' }
          ] as benefit}
            <div class="flex items-start gap-4 p-4 bg-white/80 rounded-2xl shadow-lg">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="{benefit.icon}" style="color: {benefit.color === 'text-purple-600' ? '#9333ea' : benefit.color === 'text-blue-600' ? '#2563eb' : '#ea580c'};" size="24" />
              </div>
              <div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p class="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.3s;">
        <div class="relative group">
          <div class="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/group.jpg" 
              alt="Group wellness session" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl">
            <div class="flex items-center gap-3">
              <Icon name="verified" style="color: white;" size="24" />
              <div>
                <p class="font-semibold text-lg">Look for our</p>
                <p class="text-orange-100">Luminous Logo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Partnership Timeline Section -->
<section class="relative py-24 bg-gray-50 overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop&auto=format')] bg-cover bg-center opacity-10"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-6">
    <div class="text-center mb-16">
      <h2 class="text-5xl font-bold text-gray-900 mb-6">Partnership Success Timeline</h2>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        See how quickly your organization can start benefiting from our wellness programs
      </p>
    </div>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400"></div>
      
      <div class="space-y-12">
        <!-- Week 1 -->
        <div class="relative flex items-center">
          <div class="flex-1 pr-8 text-right">
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Initial Consultation</h3>
              <p class="text-gray-600">Schedule your needs assessment call</p>
            </div>
          </div>
          <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
            <span class="text-white font-bold">1</span>
          </div>
          <div class="flex-1 pl-8">
            <div class="text-purple-600 font-semibold">Week 1</div>
          </div>
        </div>
        
        <!-- Week 2-3 -->
        <div class="relative flex items-center">
          <div class="flex-1 pr-8 text-right">
            <div class="text-blue-600 font-semibold">Weeks 2-3</div>
          </div>
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
            <span class="text-white font-bold">2</span>
          </div>
          <div class="flex-1 pl-8">
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Program Design</h3>
              <p class="text-gray-600">Custom program creation and scheduling</p>
            </div>
          </div>
        </div>
        
        <!-- Week 4 -->
        <div class="relative flex items-center">
          <div class="flex-1 pr-8 text-right">
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Program Launch</h3>
              <p class="text-gray-600">First wellness sessions begin!</p>
            </div>
          </div>
          <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
            <span class="text-white font-bold">3</span>
          </div>
          <div class="flex-1 pl-8">
            <div class="text-green-600 font-semibold">Week 4</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-16">
      <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold mb-4">Start Your Partnership Journey</h3>
        <p class="mb-6 text-purple-100">Ready to bring wellness to your organization?</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+19782721339" class="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors">
            📞 (978) 272-1339
          </a>
          <a href="/contact" class="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-8 py-3 rounded-lg transition-colors">
            Contact Form
          </a>
        </div>
      </div>
    </div>
  </div>
</section>