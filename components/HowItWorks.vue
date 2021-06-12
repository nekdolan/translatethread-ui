<template>
  <div id="techstack">
    <div class="w-1/2 mx-auto text-center">
      <div class="mt-5 mx-auto text-2xl font-normal text-gray-900">
        How it works
      </div>
      <div class="border-b-2 border-red-400 w-28 mx-auto mt-2"></div>
    </div>
    <div class="mt-10 w-8/12 mx-auto">
      <p>
        <span class="text-xl font-semibold"
          >Using
          <a href="https://twitter.com/translatethread" class="text-blue-600"
            >@translatethread</a
          >
          is a simple process</span
        >
      </p>
      <p class="mt-5 text-sm">
        <span>
          <ul class="list-disc list-inside">
            <li>Find the tweet you want to translate</li>
            <li>
              Mention
              <a
                href="https://twitter.com/translatethread"
                class="text-blue-600"
                >@translatethread</a
              >
              with keyword <span class="text-red-400 italic">doit</span> on the
              last tweet of the thread you want to translate.
            </li>
            <li>
              The bot will translate the thread, and reply with the link of
              translatedthread to your tweet.
            </li>
            <li>e.g.</li>
          </ul>
        </span>
      </p>
    </div>
    <div class="mt-10 w-10/12 mx-auto">
      <div class="grid grid-cols grid-cols-3">
        <div
          class="col-span-1 w-92 h-80 mr-5 border border-gray-200 rounded-xl hover:bg-gray-50"
        >
          <div
            class="bg-gray-900 font-semibold text-indigo-200 rounded-t-xl text-center p-2"
          >
            Translate Request
          </div>
          <div class="border-2 border-red-900">
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                <a
                  href="https://twitter.com/translatethread?ref_src=twsrc%5Etfw"
                  >@translatethread</a
                >
                doit
              </p>
              &mdash; Rajat Jindal (@rajatjindal1983)
              <a
                href="https://twitter.com/rajatjindal1983/status/1403659904636706816?ref_src=twsrc%5Etfw"
                >June 12, 2021</a
              >
            </blockquote>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>

        <div
          class="col-span-1 w-92 mr-5 border border-gray-200 rounded-xl hover:bg-gray-50"
        >
          <div
            class="bg-gray-900 font-semibold text-indigo-200 p-2 rounded-t-xl text-center my-auto"
          >
            Translate Response
          </div>
          <div class="overflow-hidden">
            <a target="_blank" href="https://golang.org"
              ><img
                class="w-full h-full my-auto overflow-hidden"
                data-src="images/golang.png"
                alt="Placeholder image"
                src="https://translatethread.com/images/translatethread-response.png"
            /></a>
          </div>
        </div>

        <div
          class="col-span-1 w-92 h-72 mr-5 border border-gray-200 rounded-xl"
        >
          <div
            class="bg-gray-900 font-semibold text-indigo-200 p-2 rounded-t-xl text-center my-auto"
          >
            Preview
          </div>
          <div class="overflow-hidden">
            <a target="_blank" href="https://golang.org"
              ><img
                class="w-full h-full my-auto overflow-hidden"
                data-src="images/golang.png"
                alt="Placeholder image"
                src="https://translatethread.com/images/translatethread-example.png"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
