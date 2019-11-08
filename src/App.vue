<template>
  <v-app>
    <v-app-bar
      app
      color="#212121"
      dark
    >
      <v-app-bar-nav-icon/>
      <v-select
        dense
        full-width
        hide-details
        v-model="locale"
        :items="items"
        item-text="name"
        @change="$router.push({ params: {
          lang: items.find(item => locale === item.name).lang }
        })"
      ></v-select>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      {{ $vuetify.lang.t('$vuetify.about.phone') }}
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      locale: 'Français',
      items: [
        { lang: null, name: 'English' },
        { lang: 'fr', name: 'Français' }
      ]
    }
  },
  watch: {
    $route(to, from) {
      this.setLocale(to.params.lang || 'en')
    }
  },
  created () {
    const current = this.$route.params.lang || 'en'
    const locales = [
      { lang: 'en', name: 'English' },
      { lang: 'fr', name: 'Français' }
    ]
    this.locale = locales.find(locale => locale.lang === current).name
    this.setLocale(current)
  },
  methods: {
    setLocale (lang) {
      this.$vuetify.lang.current = lang
    }
  }
}
</script>

<style lang="scss">
</style>
