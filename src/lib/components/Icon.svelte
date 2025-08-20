<script lang="ts">
  type Props = {
    name: string;
    class?: string;
    size?: string;
    style?: string;
  };
  
  let { name, class: className = "", size = "24", style = "" }: Props = $props();
  
  const iconStyle = `font-size: ${size}px; ${style}`;
</script>

<span 
  class="material-symbols-outlined {className}"
  style={iconStyle}
>
  {name}
</span>