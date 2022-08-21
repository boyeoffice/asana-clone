<template>
<div class="login_card_layout">
  <div class="login_container_header">
    <a href="#" class="login_container_header_logo primary_link">
      <img src="@/assets/logo.png" height="24" />
    </a>
  </div>
</div>
</template>

<style lang="css">
.login_card_layout {
  background-color: var(--color-card-background);
  border-radius: 8px;
  box-shadow: var(--color-box-shadow-large);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px;
  max-width: 440px;
  padding: 48px 32px;
  width: calc(100% - 16px);
}

.login_container_header {
  width: 100%;
}

.login_container_header_logo {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
}
</style>
