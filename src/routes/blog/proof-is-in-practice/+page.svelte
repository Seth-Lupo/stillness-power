<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  
  const post = {
    id: 6,
    title: "The Proof is in the Practice",
    excerpt: "Why consistent, devoted practice is the key to experiencing real transformation. Learn how discipline and dedication unlock the true benefits of Stillness Power® teachings.",
    date: "2012-06-10",
    readTime: "7 min read",
    category: "Practice Philosophy",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&auto=format",
    content: `
      <div class="opening-quote">
        <blockquote class="text-2xl italic text-amber-800 font-light mb-8 p-6 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
          "The PROOF is in the PRACTICE."
        </blockquote>
      </div>

      <p class="lead-paragraph">This is not just a catchy phrase—it's the fundamental truth about spiritual development. All the theory, all the understanding, all the inspiration in the world means nothing without consistent, devoted practice. Practice is where theory becomes reality, where knowledge becomes wisdom, where hope becomes experience.</p>
      
      <h3>Why Practice Matters</h3>
      <p>Reading about swimming will never teach you to swim. Talking about peace will never bring you peace. Only by diving into the practice itself do we discover its transformative power.</p>
      
      <div class="wisdom-highlight">
        <p class="text-lg italic text-center text-amber-700 mb-0">
          Practice is the bridge between where you are and where you want to be.
        </p>
      </div>
      
      <div class="elements-section">
        <h3>The Elements of Effective Practice</h3>
        <p>Not all practice is created equal. Effective spiritual practice has several key elements:</p>
        
        <div class="elements-grid">
          <div class="element-card">
            <div class="element-icon">1</div>
            <h4>Consistency</h4>
            <p>Better to practice 10 minutes daily than 2 hours once a week</p>
          </div>
          
          <div class="element-card">
            <div class="element-icon">2</div>
            <h4>Devotion</h4>
            <p>Approach practice with love, not obligation</p>
          </div>
          
          <div class="element-card">
            <div class="element-icon">3</div>
            <h4>Patience</h4>
            <p>Trust the process even when progress seems slow</p>
          </div>
          
          <div class="element-card">
            <div class="element-icon">4</div>
            <h4>Discipline</h4>
            <p>Show up even when you don't feel like it</p>
          </div>
          
          <div class="element-card">
            <div class="element-icon">5</div>
            <h4>Surrender</h4>
            <p>Let go of expectations and trust the unfolding</p>
          </div>
        </div>
      </div>
      
      <h3>Overcoming Practice Obstacles</h3>
      <p>Everyone faces challenges in maintaining practice. Here are common obstacles and practical solutions:</p>
      
      <div class="obstacles-section">
        <div class="obstacle-item">
          <div class="obstacle-challenge">"I don't have time"</div>
          <div class="obstacle-solution">Start with 5 minutes. Everyone has 5 minutes.</div>
        </div>
        
        <div class="obstacle-item">
          <div class="obstacle-challenge">"I don't feel anything"</div>
          <div class="obstacle-solution">Practice is working even when you can't feel it</div>
        </div>
        
        <div class="obstacle-item">
          <div class="obstacle-challenge">"My mind is too busy"</div>
          <div class="obstacle-solution">A busy mind is exactly why you need practice</div>
        </div>
        
        <div class="obstacle-item">
          <div class="obstacle-challenge">"I keep forgetting"</div>
          <div class="obstacle-solution">Set reminders and link practice to existing habits</div>
        </div>
      </div>
      
      <div class="fruits-section">
        <h3>The Fruits of Consistent Practice</h3>
        <p>When you commit to regular practice, you begin to notice subtle but profound changes:</p>
        
        <div class="fruits-grid">
          <div class="fruit-item">Greater emotional stability and resilience</div>
          <div class="fruit-item">Improved physical health and energy</div>
          <div class="fruit-item">Enhanced intuition and clarity</div>
          <div class="fruit-item">Deeper compassion for yourself and others</div>
          <div class="fruit-item">A growing sense of connection to something greater</div>
          <div class="fruit-item">Joy that doesn't depend on external circumstances</div>
        </div>
      </div>
      
      <h3>Your Practice, Your Path</h3>
      <p>Remember that your practice is uniquely yours. What matters is not how it compares to others', but how it serves your own growth and awakening.</p>
      
      <p>Some days your practice will feel inspired and profound. Other days it will feel mechanical or difficult. Both are necessary. Both are perfect.</p>
      
      <p>The key is to keep showing up, keep breathing, keep opening your heart. Trust that the practice is working on levels you may not even be aware of.</p>
      
      <div class="commitment-section">
        <p class="text-xl font-semibold text-center p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border border-amber-200">
          As we say in Stillness Power®: <span class="text-amber-700">"The PROOF is in the PRACTICE."</span> 
          Make the commitment, and let your own experience be your teacher.
        </p>
      </div>
    `
  };
</script>

<svelte:head>
  <title>{post.title} - Stillness Power®</title>
  <meta name="description" content={post.excerpt} />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-[50vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-[url('{post.image}')] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-blue-900/60"></div>

  <div class="relative z-10 w-full">
    <div class="mx-auto max-w-4xl px-6 text-center text-white">
      <div class="animate-fade-in-up" style="animation-delay: 0.2s;">
        <div class="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
          {post.category}
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
        <div class="flex items-center justify-center gap-6 text-purple-200">
          <div class="flex items-center gap-2">
            <Icon name="calendar_today" style="color: currentColor;" size="16" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="schedule" style="color: currentColor;" size="16" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Article Content -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-3xl px-6">
    <div class="prose prose-lg max-w-none">
      <div class="text-xl text-gray-700 leading-relaxed mb-8 font-light border-l-4 border-purple-500 pl-6 bg-purple-50 py-6 rounded-r-lg">
        {post.excerpt}
      </div>
      
      <div class="article-content text-gray-800 leading-relaxed">
        {@html post.content}
      </div>
    </div>
    
    <!-- Back to Blog -->
    <div class="mt-12 pt-8 border-t border-gray-200">
      <a href="/blog" class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
        <Icon name="arrow_back" style="color: currentColor;" size="20" />
        Back to All Articles
      </a>
    </div>
  </div>
</section>

<style>
  :global(.article-content .lead-paragraph) {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #374151;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  :global(.article-content h3) {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #fde68a;
  }
  
  :global(.article-content h4) {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.75rem;
  }
  
  :global(.article-content p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #4b5563;
    font-size: 1rem;
  }
  
  :global(.article-content .wisdom-highlight) {
    margin: 2rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border-radius: 1rem;
    border: 1px solid #f59e0b;
    text-align: center;
  }
  
  :global(.article-content .elements-section) {
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #fefce8 0%, #fef9c3 100%);
    border-radius: 1rem;
    border: 1px solid #facc15;
  }
  
  :global(.article-content .elements-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  :global(.article-content .element-card) {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.1);
    border: 1px solid #fde68a;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  :global(.article-content .element-card:hover) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -3px rgba(245, 158, 11, 0.15);
  }
  
  :global(.article-content .element-icon) {
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  :global(.article-content .element-card h4) {
    color: #d97706;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  :global(.article-content .element-card p) {
    margin-bottom: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  :global(.article-content .obstacles-section) {
    margin: 2rem 0;
  }
  
  :global(.article-content .obstacle-item) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 0.75rem;
    border-left: 4px solid #f97316;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
  }
  
  :global(.article-content .obstacle-challenge) {
    font-weight: 600;
    color: #ea580c;
    font-size: 1.1rem;
  }
  
  :global(.article-content .obstacle-solution) {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
  }
  
  :global(.article-content .fruits-section) {
    margin: 3rem 0;
    padding: 2rem;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-radius: 1rem;
    border: 1px solid #86efac;
  }
  
  :global(.article-content .fruits-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  
  :global(.article-content .fruit-item) {
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border-left: 3px solid #22c55e;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #374151;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }
  
  :global(.article-content .commitment-section) {
    margin: 3rem 0;
  }
  
  :global(.article-content .commitment-section p) {
    margin-bottom: 0;
  }
  
  :global(.article-content ul) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  :global(.article-content ol) {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  :global(.article-content li) {
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }
  
  :global(.article-content ul li) {
    list-style-type: disc;
  }
  
  :global(.article-content ol li) {
    list-style-type: decimal;
  }
  
  :global(.article-content strong) {
    font-weight: 600;
    color: #1f2937;
  }
  
  :global(.article-content blockquote) {
    position: relative;
  }
  
  :global(.article-content blockquote::before) {
    content: '"';
    position: absolute;
    left: -1rem;
    top: -0.5rem;
    font-size: 4rem;
    color: #f59e0b;
    opacity: 0.3;
    font-family: serif;
  }
  
  @media (max-width: 640px) {
    :global(.article-content .obstacle-item) {
      flex-direction: column;
    }
    
    :global(.article-content .elements-grid) {
      grid-template-columns: 1fr;
    }
    
    :global(.article-content .fruits-grid) {
      grid-template-columns: 1fr;
    }
  }
</style>