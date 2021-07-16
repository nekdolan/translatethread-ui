<template>
  <div id="techstack" class="text-gray-100">
    <div class="w-full lg:w-1/2 mx-auto text-center">
      <div class="mt-5 mx-auto text-2xl font-normal ">
        How it works
      </div>
      <div class="border-b-2 border-red-400 w-28 mx-auto mt-2"></div>
    </div>
    <div class="mt-10 w-10/12 lg:w-8/12 mx-auto">
      <p class="lg:text-left text-center">
        <span class="text-xl font-semibold"
          >Using
          <a href="https://twitter.com/translatethread" class="text-blue-400"
            >@translatethread</a
          >
          is a simple process</span
        >
      </p>
      <p class="mt-5 text-sm">
        <span>
          <ul class="list-none list-inside">
            <li class="mt-1">- Find the tweet you want to translate</li>
            <li class="mt-1">
              - Mention
              <a
                href="https://twitter.com/translatethread"
                class="text-blue-600"
                >@translatethread</a
              >
              with keyword <span class="text-red-400 italic">doit</span> on the
              last tweet of the thread you want to translate.
            </li>
            <li class="mt-1">
              - The bot will translate the thread, and reply with the link of
              translatedthread to your tweet.
            </li>
            <li class="mt-2">e.g.</li>
          </ul>
        </span>
      </p>
    </div>
    <div class="mt-10 w-10/12 mx-auto">
      <div class="grid grid-cols lg:grid-cols-3 grid-cols-1">
        <div
          class="col-span-1 w-92 h-80 mr-5 border border-gray-700 rounded-xl"
        >
          <div
            class="bg-gray-900 font-semibold text-indigo-200 rounded-t-xl text-center p-2"
          >
            Translate Request
          </div>
          <div class="bg-gray-900">
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
          class="col-span-1 w-92 mr-5 border border-gray-700 rounded-xl mt-40 lg:mt-0"
        >
          <div
            class="bg-gray-900 font-semibold text-indigo-200 p-2 rounded-t-xl text-center"
          >
            Translate Response
          </div>
          <div class="bg-gray-900 -mb-4">
            <blockquote class="twitter-tweet">
              <p lang="en" dir="ltr">
                hey
                <a
                  href="https://twitter.com/rajatjindal1983?ref_src=twsrc%5Etfw"
                  >@rajatjindal1983</a
                >, here is the translated thread you requested
                <a href="https://t.co/8b0jPQlDs7">https://t.co/8b0jPQlDs7</a>
              </p>
              &mdash; translatethread (@translatethread)
              <a
                href="https://twitter.com/translatethread/status/1403659911683260416?ref_src=twsrc%5Etfw"
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
          class="col-span-1 w-92 h-44 lg:h-72 mr-5 border border-gray-700 rounded-xl mt-20 lg:mt-0"
        >
          <div
            class="bg-gray-900 font-semibold text-indigo-200 p-2 rounded-t-xl text-center my-auto"
          >
            Preview
          </div>
          <div class="bg-gray-100 border-2 mt-2 p-2 rounded-xl">
            <div class="rounded-xl h-full bg-gray-900 overflow-hidden">
              <a
                target="_blank"
                href="https://e.translatethread.com/thread/1403659904636706816"
                ><img class="" alt="Placeholder image" src="/images/preview.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
