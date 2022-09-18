<script setup lang="ts">
  import { ref } from 'vue'

  interface Form {
    email?: string,
    password?: string
  }
  const isFirst = ref<Boolean>(true)

  const form = ref<Form>({})
</script>

<template>
  <div class="login_card_layout bg-white-base shadow-large">
    <div class="w-full">
      <div class="flex flex-col">
        <div v-show="!isFirst" @click="isFirst = !isFirst" class="back_button" style="position: absolute; height: 32px;">
          <div class="ThemeableIconButton ThemeableIconButton--medium ThemeableIconButton">
            <svg class="Icon BackArrowLongIcon" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M30,14.5H5.6l7.4-7.4c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-10,10c-0.6,0.6-0.6,1.5,0,2.1l10,10c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-7.4-7.4H30c0.8,0,1.5-0.7,1.5-1.5S30.8,14.5,30,14.5z"></path></svg>
          </div>
        </div>
        <a href="#" class="flex items-center self-center flex-col primary_link" style="margin-bottom: 48px;">
          <img src="@/assets/logo.png" style="height: 24px;" />
        </a>
      </div>
      <h2 class="text-center text-xl text-black-base font-normal mb-8">Login in to Asana</h2>
      <div v-show="isFirst" class="flex google_button bg-white-base text-black-base w-full hover:bg-grey-md">
        <svg class="google_icon h-5 invisible md:visible" viewBox="0 0 18 18"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" fill="#EA4335"></path></svg>
        <span>Continue with Google</span>
      </div>
      <span v-show="isFirst" class="flex items-center text-center">
        <span class="SeparatorRow-horizontalLine"></span>
        <span style="margin: 0 8px;" class="text-base">or</span>
        <span class="SeparatorRow-horizontalLine"></span>
      </span>
      <form class="flex flex-col mt-8">
        <div  v-show="!isFirst" class="_default flex mb-10 py-3 px-6 justify-start items-center w-full color-text rounded-md">
          <div class="flex w-full items-center justify-center">
            <img class="pr-2" src="@/assets/grey_man_2_avatar.png" width="28" height="28">
            <span class="text-base font-normal">{{ form.email }}</span>
          </div>
          <div @click="isFirst = !isFirst" class="RemoveButton--isEnabled RemoveButton LoginOptionsLayout-removeButton RemoveButton--xsmall">
            <svg class="CompoundIcon--xsmall CompoundIcon XCircleCompoundIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M23,12c0,6.1-4.9,11-11,11S1,18.1,1,12S5.9,1,12,1S23,5.9,23,12z" class="CompoundIcon-outer"></path><path d="M13.4,12l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L7.7,6.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.3,4.3l-4.3,4.3c-0.4,0.4-0.4,1,0,1.4C6.5,17.9,6.7,18,7,18s0.5-0.1,0.7-0.3l4.3-4.3l4.3,4.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z" class="CompoundIcon-inner"></path></svg>
          </div>
        </div>
        <label
          :for="isFirst === true ? 'Email':'Password'"
          class="color-tweak"
          style="font-size: 12px; line-height: 18px;">
            {{ isFirst === true ? 'Email address':'Password' }}
        </label>
        <div class="pt-2">
          <input
            v-show="isFirst"
            type="email"
            class="form-input px-3 py-1 rounded-md w-full"
            placeholder="name@company.com"
            v-model="form.email">
          <input
            v-show="!isFirst"
            type="password"
            class="form-input px-3 py-1 rounded-md w-full"
            v-model="form.password">
        </div>
        <div class="pt-3">
          <a class="color-tweak underline text-xs" href="#">Forgot password?</a>
        </div>
        <div class="pt-4">
          <button v-show="isFirst" @click="isFirst=!isFirst" type="button" class="NuxButton ThemeableRectangularButton w-full py-2 rounded-lg">Continue</button>
          <button v-show="!isFirst" type="button" class="NuxButton ThemeableRectangularButton w-full py-2 rounded-lg">Login</button>
        </div>
        <div v-show="isFirst" class="pt-5 text-center">
          <span class="color-tweak">Don't have an account?</span>
          <a href="#" class="pl-2 primary_link">Sign up</a>
        </div>
        <div v-show="isFirst" class="pt-5 text-center color-tweak small_text">
          <span>This site is protected by reCAPTCHA and the Google</span>
          <a class="color-tweak underline" href="#">&nbsp;Privacy Policy&nbsp;</a>
          <span>and &nbsp;</span>
          <a href="#" class="color-tweak underline">Terms of Service&nbsp;</a>
          <span>apply.</span>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="css">
.login_card_layout {
  border-radius: 8px;
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
  border-color: var(--secondary-border) !important;
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

.back_button {

}

.Icon {
    flex: 0 0 auto;
    height: 16px;
    width: 16px;
}

.ThemeableIconButton.ThemeableIconButton--medium.ThemeableIconButton {
    height: 28px;
    min-height: 28px;
    min-width: 28px;
    width: 28px;
}

.ThemeableIconButton {
    align-items: center;
    border: 1px solid;
    border-radius: 6px;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    transition-duration: .2s;
    transition-property: background,border,fill;
    cursor: pointer;
    background: var(--color-button-background-subtle);
    border-color: var(--color-button-background-subtle);
    fill: var(--color-text-weak);
}

.RemoveButton.RemoveButton--xsmall.RemoveButton {
  height: 20px;
  min-height: 20px;
  min-width: 20px;
  width: 20px;
  cursor: pointer;
}

.RemoveButton {
  align-items: center;
  border-radius: 6px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
}

.RemoveButton .CompoundIcon-inner {
    fill: var(--color-white);
    transition: 200ms fill,200ms stroke;
}

.RemoveButton .CompoundIcon-outer {
    fill: var(--color-icon);
    stroke: var(--color-icon);
    transition: 200ms fill,200ms stroke;
}

.CompoundIcon.CompoundIcon--xsmall {
    height: 12px;
    min-height: 12px;
    min-width: 12px;
    width: 12px;
}

.CompoundIcon {
    display: block;
    stroke-width: 2px;
}
</style>
