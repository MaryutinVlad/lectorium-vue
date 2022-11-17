<template>
    <div class="overlay">
        <form class="form" action="#">
            <h2 class="form__title">
                {{title}}
            </h2>
            <input class="form__input-field" type="text" placeholder="username">
            <input class="form__input-field" type="email" placeholder="email">
            <input class="form__input-field" type="password" placeholder="password">
            <div class="form__fast-auth-container">
                <a class="form__fast-auth-item" href="#">
                    <img class="form__fast-auth-image" src="../images/Google_Authenticator_for_Android_icon.svg" alt="">
                </a>
                <a class="form__fast-auth-item" href="#">
                    <img class="form__fast-auth-image" src="../images/apple-social-logo-outline_icon-icons.com_74064.svg" alt="">
                </a>
                <a class="form__fast-auth-item" href="#">
                    <img class="form__fast-auth-image" src="../images/fb_icon-icons.com_65434.svg" alt="">
                </a>
            </div>
            <input class="form__submit-button" type="submit" value="Sign up">
        </form>
    </div>
</template>

<script>
  export default {
	name: 'SignUp',
    data() {
        return {
            title: 'Sign Up'
        }
    }
  }
</script>

<style scoped>
  @import url('../styles/overlay/overlay.css');
  @import url('../styles/overlay/overlay_hidden.css');
  @import url('../styles/form/form.css');
  @import url('../styles/form/form__title.css');
  @import url('../styles/form/form__input-field.css');
  @import url('../styles/form/form__fast-auth-container.css');
  @import url('../styles/form/form__fast-auth-item.css');
  @import url('../styles/form/form__fast-auth-image.css');
  @import url('../styles/form/form__submit-button.css');
</style>