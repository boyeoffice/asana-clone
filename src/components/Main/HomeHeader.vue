<template>
  <nav class="flex w-full px-4 items-center h-16 justify-between">
    <div class="">
      <div class="flex justify-start">
        <h1 class="color-text font-medium text-lg">Home</h1>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex search_w">
        <input type="text" class="search_input form-input pl-10 py-1 rounded-2xl text-sm color-text _strong_dark_border" placeholder="Search">
        <svg class="Icon TopbarSearchTypeahead-icon MagnifyerIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M29.707,28.293l-8.256-8.256C23.042,18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958,7.037-2.549l8.256,8.256L29.707,28.293z M4,13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,9-9,9C8.037,22,4,17.963,4,13z"></path></svg>
      </div>
      <div class="add_button">
        <svg class="Icon PlusIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path></svg>
      </div>
      <div class="up_button">
        <span>Upgrade</span>
      </div>
      <div aria-hidden="true" class="avatar_h" style="background-image: url(&quot;https://s3.amazonaws.com/profile_photos/1200463837084579.1200463815690225.o0pR5jyxAnANzlYtTzOy_27x27.png&quot;);"></div>
    </div>
  </nav>
</template>

<style>
  .search_input {
    width: 140px;
    transition: background-color .15s ease-out,width .15s ease-out,border-color .15s ease-out;
  }

  .search_input:focus {
    width: 480px;
    border-width: 1px;
    border-style: solid;
  }

  .search_w {
    position: relative;
  }

  .search_w .Icon {
    fill: var(--color-text-weak);
    left: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: fill .15s ease-out;
  }

  .add_button {
    background: var(--color-button-creation-background);
    border-color: var(--color-button-creation-background);
    fill: var(--color-white);
    height: 28px;
    min-height: 28px;
    min-width: 28px;
    width: 28px;
    align-items: center;
    border: 1px;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    transition-duration: .2s;
    transition-property: background,border,fill;
    margin-left: 12px;
    cursor: pointer;
  }

  .up_button {
    background: var(--color-button-upsell-background);
    border-color: var(--color-button-upsell-background);
    color: var(--color-text-2);
    fill: var(--color-text-2);
    align-items: center;
    border: 1px;
    border-radius: 6px;
    box-sizing: border-box;
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    overflow: hidden;
    transition-duration: .2s;
    transition-property: background,border,color,fill;
    margin-left: 12px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    padding: 0 12px;
  }

  .avatar_h {
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    min-width: 28px;
    width: 28px;
    margin-left: 12px;
    align-items: center;
    background: center/cover var(--color-deprecated-lightGray3);
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 7%);
    box-sizing: border-box;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    position: relative;
    vertical-align: top;
    cursor: pointer;
  }
</style>
