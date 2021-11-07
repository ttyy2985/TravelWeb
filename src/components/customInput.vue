<template>
  <div
    class="
      input-container
      w-full
      relative
      rounded-lg
      border border-black border-opacity-10
      bg-gray-50
      py-2
      px-3
      w-full
    "
  >
    <input type="text" placeholder="搜尋關鍵字" class="w-full pr-7 bg-transparent" />
    <icon class="w-5 h-5 absolute right-3" iconName="Search"></icon>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
};
</script>
