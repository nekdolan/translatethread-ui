<template>
  <div :id="tweet.ID" class="mx-auto text-center">
    <div class="grid grid-cols grid-cols-1 lg:mt-2">
      <div class="mx-auto col-1 w-full lg:w-3/5  pt-4">
        <div class="flex w-full">
          <div class="ml-2 w-1/12 lg:w-1/12 text-right mt-1 lg:mr-2">
            <img
              class="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
              :src="userInfo.profilePhoto"
            />
          </div>
          <div
            class="
              flex
              w-11/12
              flex-col
              pb-4
              ml-2
              lg:w-10/12
              text-indigo-100 hover:text-gray-100
              hover:bg-gray-800
              border border-gray-500 border-opacity-30 p-4 rounded-xl
            "
          >
            <div class="flex lg:flex-col text-left">
              <div class="flex">
                <span class="flex font-semibold text-sm">
                  {{ tweet.Author }}
                  <img
                    v-if="userInfo.verified"
                    class="h-3 w-3 ml-1 mt-1"
                    src="https://translatethread.com/images/Twitter_Verified_Badge.svg"
                  />
                </span>

                <span class="text-gray-500 text-sm ml-1">
                  @{{ tweet.AuthorHandle }}
                </span>
                <span class="mt-0.5 ml-1 text-left text-gray-500 text-xs">
                  · {{ getDate(tweet.TweetedAt) }}
                </span>
              </div>
            </div>
            <div class="mt-2 mr-4 text-left text-sm">
              <p v-html="newLinesInterpreted"></p>
            </div>
            <div v-if="tweet.MediaEntities" class="mr-4 lg:mr-0 lg:ml-0">
              <image-one
                v-if="tweet.MediaEntities.length == 1"
                :mediaEntities="tweet.MediaEntities"
              />
              <image-two
                v-if="tweet.MediaEntities.length == 2"
                :mediaEntities="tweet.MediaEntities"
              />
              <image-three
                v-if="tweet.MediaEntities.length == 3"
                :mediaEntities="tweet.MediaEntities"
              />
              <image-four
                v-if="tweet.MediaEntities.length == 4"
                :mediaEntities="tweet.MediaEntities"
              />
            </div>
            <TweetActions :tweet="tweet" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageOne from "./ImageOne.vue";
import ImageTwo from "./ImageTwo.vue";
import ImageThree from "./ImageThree.vue";
import ImageFour from "./ImageFour.vue";
import TweetActions from "./TweetActions.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ImageOne, ImageTwo, ImageThree, ImageFour, TweetActions },
  name: "Tweet",
  props: ["tweet"],
  beforeMount: function() {
    this.fetchUserInfo(this.tweet.AuthorID);
  },
  computed: {
    ...mapGetters("userinfo", ["getUserInfo"]),
    userInfo: function() {
      if (!this.getUserInfo(this.tweet.AuthorID)) {
        return {};
      }

      return this.getUserInfo(this.tweet.AuthorID);
    },
    newLinesInterpreted: function() {
      if (!this.tweet || !this.tweet.TranslatedText) {
        return;
      }

      return this.tweet.TranslatedText.replaceAll("\n", "<br/>");
    },
    permaLink: function() {
      console.log(window.location);
      return (
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "#" +
        this.tweet.ID
      );
    },
  },
  methods: {
    ...mapActions({ fetchUserInfo: "userinfo/fetchUserInfo" }),
    getDate: function(d) {
      const dateMoment = this.$moment(d);
      const todayMoment = this.$moment();
      const ageInHours = this.$moment
        .duration(todayMoment.diff(dateMoment))
        .asHours();

      if (ageInHours < 24) {
        var d = dateMoment.fromNow(todayMoment);
        d = d.replaceAll(" hours", "h");
        d = d.replaceAll(" minutes", "m");

        return d;
      }

      if (dateMoment.year() == todayMoment.year()) {
        return dateMoment.format("MMM DD");
      }

      return dateMoment.format("MMM DD, YYYY");
    },
  },
};
</script>
