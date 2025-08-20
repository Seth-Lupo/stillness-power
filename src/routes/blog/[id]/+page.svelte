<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '$lib/components/Icon.svelte';
  
  const blogPosts = [
    {
      id: 1,
      title: "The Sacred Practice of Breathing",
      excerpt: "\"Oh, Eternal One, my breath being Yours, teach me to inhale and exhale with the same Bliss, so I can truly accept the duality in this earthly life.\" Discover how conscious breathing connects us to divine stillness.",
      date: "2012-10-26",
      readTime: "4 min read",
      category: "Breath Work",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&auto=format",
      content: `
        <p>Breathing is not merely a biological function—it is a sacred bridge between the physical and spiritual realms. In the ancient teachings that form the foundation of Stillness Power®, we understand that our breath is literally the breath of the Divine flowing through us.</p>
        
        <h3>The Prayer of Breath</h3>
        <p>"Oh, Eternal One, my breath being Yours, teach me to inhale and exhale with the same Bliss, so I can truly accept the duality in this earthly life." This prayer encapsulates the essence of conscious breathing practice.</p>
        
        <p>When we breathe with awareness, we acknowledge that each inhalation brings us divine energy, and each exhalation releases what no longer serves us. This creates a continuous cycle of renewal and purification.</p>
        
        <h3>Practical Breathing Techniques</h3>
        <p>In our Stillness Power® classes, we practice specific breathing patterns that help quiet the mind and open the heart:</p>
        <ul>
          <li><strong>Divine Breath:</strong> Equal length inhales and exhales, connecting to universal rhythm</li>
          <li><strong>Cleansing Breath:</strong> Longer exhales to release tension and negativity</li>
          <li><strong>Energizing Breath:</strong> Focused inhales to draw in life force energy</li>
        </ul>
        
        <p>Remember: "The PROOF is in the PRACTICE." Only through consistent, devoted practice will you experience the transformative power of conscious breathing.</p>
      `
    },
    {
      id: 2,
      title: "Meditation: Undoing the Mischief of the Monkey Mind",
      excerpt: "MEDITATE and UNDO the MISCHIEF done by the MONKEY MIND. Learn practical techniques to quiet mental chatter and find your inner stillness through dedicated practice.",
      date: "2013-01-21",
      readTime: "6 min read",
      category: "Meditation",
      image: "https://images.unsplash.com/photo-1549540806-76ce9007b674?w=1200&h=600&fit=crop&auto=format",
      content: `
        <p>We all know the monkey mind—that restless, chattering voice that jumps from thought to thought, creating mischief in our inner peace. Meditation is our tool to tame this wild mind and find the stillness within.</p>
        
        <h3>Understanding the Monkey Mind</h3>
        <p>The monkey mind represents our untrained consciousness—always moving, always seeking, never satisfied. It creates stories, worries about the future, regrets the past, and rarely allows us to be present in the moment.</p>
        
        <p>But through the practice of meditation, we can UNDO this mischief. We can train our minds to find peace, clarity, and connection to our highest Self.</p>
        
        <h3>Meditation Techniques for Stillness</h3>
        <p>In Stillness Power® practice, meditation is not about forcing the mind to be empty—it's about observing and gradually training it:</p>
        
        <ol>
          <li><strong>Breath Awareness:</strong> Simply watch your breath without trying to change it</li>
          <li><strong>Mantra Practice:</strong> Use sacred sounds to give the mind a positive focus</li>
          <li><strong>Body Scanning:</strong> Move awareness through the body to anchor attention</li>
          <li><strong>Loving-Kindness:</strong> Send compassion to yourself and others</li>
        </ol>
        
        <h3>The Journey to Inner Peace</h3>
        <p>Meditation is not about achieving some perfect state—it's about developing a loving relationship with your own mind. Each time you notice the monkey mind and gently return to your practice, you are strengthening your spiritual muscles.</p>
        
        <p>With consistent practice, you'll find that the monkey mind settles naturally, and profound stillness emerges. This is where healing happens, where wisdom arises, and where you connect with your true nature.</p>
      `
    },
    {
      id: 3,
      title: "Finding Light Within: The Spiritual Path",
      excerpt: "\"Lord, always keep me in Your Light so I don't drift away.\" Explore how yoga practice becomes a spiritual journey of connection and divine guidance.",
      date: "2012-08-24",
      readTime: "5 min read",
      category: "Spiritual Practice",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&auto=format",
      content: `
        <p>"Lord, always keep me in Your Light so I don't drift away." This heartfelt prayer reflects the essence of spiritual practice—maintaining our connection to the Divine light that guides and sustains us.</p>
        
        <h3>Yoga as Spiritual Practice</h3>
        <p>While many people see yoga as physical exercise, true yoga is a spiritual discipline that unites us with the Divine. Every posture, every breath, every moment of practice is an opportunity to deepen this sacred connection.</p>
        
        <p>In Stillness Power®, we approach yoga as a form of moving prayer. Each movement is offered with devotion, each breath is a communication with the sacred, and each moment of stillness is a homecoming to our true nature.</p>
        
        <h3>Staying in the Light</h3>
        <p>Life has a way of pulling us into darkness—stress, fear, anger, and confusion can cloud our perception and make us feel separate from the Divine. But through consistent spiritual practice, we learn to stay anchored in the Light:</p>
        
        <ul>
          <li><strong>Daily Practice:</strong> Regular meditation and movement keep us connected</li>
          <li><strong>Mindful Living:</strong> Bringing awareness to all activities throughout the day</li>
          <li><strong>Service:</strong> Using our practice to help others also helps us stay aligned</li>
          <li><strong>Surrender:</strong> Letting go of our small will to align with Divine will</li>
        </ul>
        
        <h3>The Inner Light</h3>
        <p>The beautiful truth is that the Light we seek is already within us. We don't need to find it—we need to remember it, uncover it, and allow it to shine through our daily lives.</p>
        
        <p>When we practice with devotion and sincerity, we begin to embody this Light. We become beacons for others who are still searching, and our very presence becomes a gift to the world.</p>
        
        <p>Remember: You are already the Light you seek. Stillness Power® practice simply helps you remember this eternal truth.</p>
      `
    },
    {
      id: 4,
      title: "Listening to Nature's Whispers",
      excerpt: "\"Whispers of Nature can be heard only by a Blissful Heart.\" How mindfulness practice opens our awareness to the subtle teachings around us every day.",
      date: "2012-10-14",
      readTime: "4 min read",
      category: "Mindfulness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format",
      content: `
        <p>"Whispers of Nature can be heard only by a Blissful Heart." Nature is constantly speaking to us, offering wisdom, guidance, and healing. But to hear these subtle messages, we must cultivate a heart filled with bliss—a state of open, joyful awareness.</p>
        
        <h3>The Language of Nature</h3>
        <p>Nature communicates through countless channels: the rhythm of waves, the dance of leaves in wind, the patient growth of trees, the cycles of seasons. These are not random events but profound teachings about life, impermanence, resilience, and grace.</p>
        
        <p>When we practice mindfulness in nature, we begin to understand this language. We see that we are not separate from nature—we ARE nature, temporarily expressing itself in human form.</p>
        
        <h3>Cultivating a Blissful Heart</h3>
        <p>A blissful heart is not one that is always happy—it's a heart that is open, receptive, and filled with wonder. It's the heart of a child who sees magic everywhere, combined with the wisdom of someone who has learned to trust life's unfolding.</p>
        
        <p>We cultivate this state through:</p>
        <ul>
          <li><strong>Gratitude Practice:</strong> Appreciating the beauty that surrounds us daily</li>
          <li><strong>Present Moment Awareness:</strong> Fully experiencing what is here now</li>
          <li><strong>Wonder and Curiosity:</strong> Approaching life with fresh eyes</li>
          <li><strong>Loving-Kindness:</strong> Extending compassion to all beings</li>
        </ul>
        
        <h3>Practical Nature Meditation</h3>
        <p>Try this simple practice: Sit quietly in a natural setting. Close your eyes and listen. What do you hear? The wind? Birds? Insects? Your own heartbeat?</p>
        
        <p>Now open your eyes and really look. Notice colors, textures, movements. See if you can feel the life force energy flowing through everything, including yourself.</p>
        
        <p>Ask nature: "What do you want to teach me today?" Then listen with your whole being. The answer may come as a feeling, an image, a knowing, or simply a sense of peace.</p>
        
        <p>When we learn to listen to nature's whispers, we reconnect with our own natural wisdom and find guidance for every aspect of our lives.</p>
      `
    },
    {
      id: 5,
      title: "Discovering the Ocean Within",
      excerpt: "\"Lord, in the littlest there is an Ocean of You to be Discovered.\" Every small moment holds infinite possibility for spiritual awakening and self-realization.",
      date: "2012-08-12",
      readTime: "5 min read",
      category: "Self-Discovery",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=600&fit=crop&auto=format",
      content: `
        <p>"Lord, in the littlest there is an Ocean of You to be Discovered." This profound truth reminds us that the infinite Divine presence is not found only in grand gestures or peak experiences—it dwells within the smallest, most ordinary moments of our lives.</p>
        
        <h3>The Infinite in the Infinitesimal</h3>
        <p>We often think we need to go somewhere else, do something special, or become someone different to connect with the Divine. But the truth is that every breath, every heartbeat, every moment of awareness contains the entire ocean of Divine consciousness.</p>
        
        <p>A single dewdrop contains the essence of the entire ocean. Similarly, each moment of your life contains the fullness of spiritual possibility.</p>
        
        <h3>Finding the Sacred in the Ordinary</h3>
        <p>In Stillness Power® practice, we learn to recognize the sacred within the everyday:</p>
        
        <ul>
          <li><strong>Mindful Breathing:</strong> Each breath is communion with universal life force</li>
          <li><strong>Present Moment Awareness:</strong> This moment is the only place the Divine can be met</li>
          <li><strong>Loving Attention:</strong> Whatever we attend to with love reveals its sacred nature</li>
          <li><strong>Inner Listening:</strong> The small voice within connects us to infinite wisdom</li>
        </ul>
        
        <h3>The Practice of Micro-Meditations</h3>
        <p>You don't need hours of formal practice to discover the ocean within. Try these micro-meditations throughout your day:</p>
        
        <ol>
          <li><strong>Three Conscious Breaths:</strong> Stop and breathe mindfully three times</li>
          <li><strong>Gratitude Moment:</strong> Appreciate something small and beautiful</li>
          <li><strong>Body Check-in:</strong> Feel your feet on the ground, your breath flowing</li>
          <li><strong>Heart Opening:</strong> Send love to yourself or someone else</li>
        </ol>
        
        <h3>The Vastness of Now</h3>
        <p>When you truly drop into the present moment—when you stop the mental commentary and simply BE—you discover that this moment is not small at all. It is vast, unlimited, pregnant with infinite possibility.</p>
        
        <p>In this recognition, you realize that you are not a small person having a small experience. You are the ocean of consciousness itself, temporarily expressing as a wave of individual awareness.</p>
        
        <p>The little self dissolves into the Ocean of Being, and you remember who you really are. This is the greatest discovery possible, and it's available in every single moment.</p>
      `
    },
    {
      id: 6,
      title: "The Proof is in the Practice",
      excerpt: "Why consistent, devoted practice is the key to experiencing real transformation. Learn how discipline and dedication unlock the true benefits of Stillness Power® teachings.",
      date: "2012-06-10",
      readTime: "7 min read",
      category: "Practice Philosophy",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&auto=format",
      content: `
        <p>"The PROOF is in the PRACTICE." This is not just a catchy phrase—it's the fundamental truth about spiritual development. All the theory, all the understanding, all the inspiration in the world means nothing without consistent, devoted practice.</p>
        
        <h3>Why Practice Matters</h3>
        <p>Reading about swimming will never teach you to swim. Talking about peace will never bring you peace. Only by diving into the practice itself do we discover its transformative power.</p>
        
        <p>Practice is where theory becomes reality, where knowledge becomes wisdom, where hope becomes experience. It's the bridge between where you are and where you want to be.</p>
        
        <h3>The Elements of Effective Practice</h3>
        <p>Not all practice is created equal. Effective spiritual practice has several key elements:</p>
        
        <ol>
          <li><strong>Consistency:</strong> Better to practice 10 minutes daily than 2 hours once a week</li>
          <li><strong>Devotion:</strong> Approach practice with love, not obligation</li>
          <li><strong>Patience:</strong> Trust the process even when progress seems slow</li>
          <li><strong>Discipline:</strong> Show up even when you don't feel like it</li>
          <li><strong>Surrender:</strong> Let go of expectations and trust the unfolding</li>
        </ol>
        
        <h3>Overcoming Practice Obstacles</h3>
        <p>Everyone faces challenges in maintaining practice:</p>
        
        <ul>
          <li><strong>"I don't have time":</strong> Start with 5 minutes. Everyone has 5 minutes.</li>
          <li><strong>"I don't feel anything":</strong> Practice is working even when you can't feel it</li>
          <li><strong>"My mind is too busy":</strong> A busy mind is exactly why you need practice</li>
          <li><strong>"I keep forgetting":</strong> Set reminders and link practice to existing habits</li>
        </ul>
        
        <h3>The Fruits of Consistent Practice</h3>
        <p>When you commit to regular practice, you begin to notice subtle but profound changes:</p>
        
        <ul>
          <li>Greater emotional stability and resilience</li>
          <li>Improved physical health and energy</li>
          <li>Enhanced intuition and clarity</li>
          <li>Deeper compassion for yourself and others</li>
          <li>A growing sense of connection to something greater</li>
          <li>Joy that doesn't depend on external circumstances</li>
        </ul>
        
        <h3>Your Practice, Your Path</h3>
        <p>Remember that your practice is uniquely yours. What matters is not how it compares to others', but how it serves your own growth and awakening.</p>
        
        <p>Some days your practice will feel inspired and profound. Other days it will feel mechanical or difficult. Both are necessary. Both are perfect.</p>
        
        <p>The key is to keep showing up, keep breathing, keep opening your heart. Trust that the practice is working on levels you may not even be aware of.</p>
        
        <p>As we say in Stillness Power®: "The PROOF is in the PRACTICE." Make the commitment, and let your own experience be your teacher.</p>
      `
    }
  ];

  $: id = Number($page.params.id);
  $: post = blogPosts.find(p => p.id === id);
</script>

<svelte:head>
  <title>{post?.title || 'Article Not Found'} - Stillness Power®</title>
  <meta name="description" content={post?.excerpt || ''} />
</svelte:head>

{#if post}
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
{:else}
  <!-- 404 Page -->
  <section class="py-24 bg-white text-center">
    <div class="mx-auto max-w-2xl px-6">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Article Not Found</h1>
      <p class="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
      <a href="/blog" class="btn btn-primary">
        Return to Blog
      </a>
    </div>
  </section>
{/if}

<style>
  :global(.article-content h3) {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  :global(.article-content p) {
    margin-bottom: 1rem;
    line-height: 1.75;
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
    margin-bottom: 0.5rem;
  }
  
  :global(.article-content ul li) {
    list-style-type: disc;
  }
  
  :global(.article-content ol li) {
    list-style-type: decimal;
  }
  
  :global(.article-content strong) {
    font-weight: 600;
    color: #111827;
  }
</style>