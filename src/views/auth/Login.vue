<template>
  <div class="login_card_layout">
    <div class="w-full">
      <div class="flex flex-col">
        <a href="#" class="flex items-center self-center flex-col primary_link" style="margin-bottom: 48px;">
          <img src="@/assets/logo.png" style="height: 24px;" />
        </a>
      </div>
      <h2 class="text-center text-2xl color-text font-normal" style="margin-bottom: 32px;">Login in to Asana</h2>
      <div class="flex google_button w-full">
        <svg class="google_icon h-5" viewBox="0 0 18 18"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" fill="#EA4335"></path></svg>
        <span>Continue with Google</span>
      </div>
      <span class="flex items-center text-center">
        <span class="SeparatorRow-horizontalLine"></span>
        <span style="margin: 0 8px;" class="text-base">or</span>
        <span class="SeparatorRow-horizontalLine"></span>
      </span>
      <form class="flex flex-col mt-8">
        <label for="Email" class="color-tweak" style="font-size: 12px; line-height: 18px;">Email address</label>
        <div class="pt-3">
          <input type="email" class="form-input px-3 py-1 rounded-md w-full" placeholder="name@company.com">
        </div>
        <div class="pt-4">
          <button type="submit" class="NuxButton ThemeableRectangularButton w-full py-2 rounded-lg">Continue</button>
        </div>
      </form>
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

.google_button {
  background: var(--color-card-background);
  border-color: var(--color-button-border-secondary);
  color: var(--color-text);
  fill: var(--color-icon);
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
  align-items: center;
  border: 1px solid;
  border-radius: 6px;
  box-sizing: border-box;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden;
  transition-duration: .2s;
  transition-property: background,border,color,fill;
  align-self: stretch;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
}

.google_button:hover {
  background: var(--color-button-background-secondary-hover);
  border-color: var(--color-button-border-secondary-hover);
  fill: var(--color-button-icon-secondary-hover);
}

.google_icon {
  position: absolute;
  left: 37px;
}


.SeparatorRow-horizontalLine {
    border-top: 1px solid var(--color-border);
    flex: 1 1 auto;
    margin-top: 8px;
    min-width: 1px;
    padding-top: 8px;
}

.NuxButton.ThemeableRectangularButton {
    background: var(--color-beta-background);
    border-color: var(--color-beta-background);
    color: var(--color-white);
    fill: var(--color-white);
}
</style>
