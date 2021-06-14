<template>
  <div v-if="false" class="grid grid-cols grid-cols-5 text-left mt-4 text-xl">
    <div
      class="text-gray-400 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600 flex items-center justify-center"
      id="comment"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
        ></path>
      </svg>
    </div>
    <div
      class="text-gray-400 w-8 h-8 rounded-full hover:bg-green-200 hover:text-green-600 flex items-center justify-center"
      id="retweet"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M11.25 4.75L8.75 7L11.25 9.25"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12.75 19.25L15.25 17L12.75 14.75"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.75 7H13.25C16.5637 7 19.25 9.68629 19.25 13V13.25"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M14.25 17H10.75C7.43629 17 4.75 14.3137 4.75 11V10.75"
        ></path>
      </svg>
    </div>
    <div
      class="text-gray-400 w-8 h-8 rounded-full hover:bg-red-200 hover:text-red-600 flex items-center justify-center"
      id="like"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    <div
      class="text-gray-400 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600 flex items-center justify-center"
      id="share"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 14.25L12 5"
        ></path>
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M8.75 8.25L12 4.75L15.25 8.25"
        ></path>
      </svg>
    </div>
    <div
      class="text-gray-400 w-8 h-8 rounded-full hover:bg-indigo-200 hover:text-indigo-600 flex items-center justify-center"
      id="original"
    >
      <a
        :href="
          'https://twitter.com/' + tweet.AuthorHandle + '/status/' + tweet.ID
        "
        target="_blank"
        title="Original Tweet"
        ><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetActions",
  props: ["tweet"],
};
</script>
