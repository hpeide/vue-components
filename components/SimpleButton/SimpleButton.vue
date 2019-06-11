<script>
  export default {
    name: 'SimpleButton',
    props: {
      to: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <a
    :href="to"
    class="SimpleButton"
  >
    <span
      class="SimpleButton__label"
    >
      {{ label }}
    </span>
    <svg
      class="SimpleButton__svg"
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="SimpleButton__path"
        d="M7.59375 6.8125V6.85156C7.67188 6.77344 7.71094 6.65625 7.71094 6.5C7.71094 6.38281 7.67188 6.26562 7.59375 6.14844L1.85156 0.367188C1.73438 0.289062 1.61719 0.25 1.5 0.25C1.38281 0.25 1.26562 0.289062 1.1875 0.367188L0.40625 1.14844C0.328125 1.26562 0.289062 1.38281 0.289062 1.5C0.289062 1.65625 0.328125 1.73438 0.40625 1.8125L5.05469 6.5L0.40625 11.1875C0.328125 11.2656 0.289062 11.3828 0.289062 11.5C0.289062 11.6562 0.328125 11.7734 0.40625 11.8516L1.1875 12.6328C1.26562 12.7109 1.38281 12.75 1.5 12.75C1.61719 12.75 1.73438 12.7109 1.85156 12.5938L7.59375 6.8125Z"
      />
    </svg>
  </a>
</template>

<style lang="sass">
  .SimpleButton
    font-family: Roboto, sans-serif
    font-style: normal
    font-weight: 500
    font-size: 20/16 * 1rem
    line-height: 22/16 * 1rem
    color: #2266FF
    text-decoration: none

    &__svg
      margin-left: 8/16 * 1rem

    &__path
      fill: #2266FF
</style>
