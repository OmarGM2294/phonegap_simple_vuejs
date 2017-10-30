import Vue from 'vue'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

Vue.mixin({
  methods: {
    ...mapActions([
      "updateLanguage"
    ]),
    ...mapGetters([
      "getLanguage"
    ])
  }
});
