<script lang="ts" setup></script>

<template>
  <div>
    Donate Page

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <!-- Main content column -->
      <div class="lg:col-span-3 space-y-4">
        <!-- Featured Article -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F486/production/_131664517_bjoernhoecke.jpg"
            alt="AfD's Björn Höcke"
            class="w-full h-72 object-cover"
          />
          <div class="p-4">
            <h2 class="text-2xl font-bold mb-2">
              German far right hails 'historic' election victory in east
            </h2>
            <p class="text-base text-gray-600 mb-2">
              Germany's anti-immigration party Alternative for Germany is on course for victory in Thuringia.
            </p>
            <p class="text-sm text-gray-500">
              3 hrs ago | Europe
            </p>
          </div>
        </div>

        <!-- Smaller Articles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Article 1 -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/D6AD/production/_131664277_gettyimages-1832599700.jpg"
              alt="Protest in Tel Aviv"
              class="w-full h-32 object-cover"
            />
            <div class="p-3">
              <h3 class="text-sm font-semibold mb-1">
                Tens of thousands rally in Israel calling for hostage release deal
              </h3>
              <p class="text-xs text-gray-600 mb-1">
                The protests come after six hostages taken by Hamas on the 7 October attacks were found dead in Gaza.
              </p>
              <p class="text-xs text-gray-500">
                3 hrs ago | Middle East
              </p>
            </div>
          </div>

          <!-- Article 2 -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/10898/production/_131664273_gettyimages-1832600312.jpg"
              alt="Damaged building in Kharkiv"
              class="w-full h-32 object-cover"
            />
            <div class="p-3">
              <h3 class="text-sm font-semibold mb-1">
                At least 41 hurt in Russian air strikes on Kharkiv
              </h3>
              <p class="text-xs text-gray-600 mb-1">
                The regional head accused Moscow of targeting civilians after a supermarket and sports complex were hit.
              </p>
              <p class="text-xs text-gray-500">
                6 hrs ago | Europe
              </p>
            </div>
          </div>

          <!-- Article 3 -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11EC7/production/_131664271_gettyimages-1673543440.jpg"
              alt="Coco Gauff at US Open"
              class="w-full h-32 object-cover"
            />
            <div class="p-3">
              <h3 class="text-sm font-semibold mb-1">
                Defending champion Coco Gauff crashes out of US Open
              </h3>
              <p class="text-xs text-gray-600 mb-1">
                Gauff loses to fellow American Emma Navarro in the fourth round of the US tennis tournament.
              </p>
              <p class="text-xs text-gray-500">
                9 mins ago | Tennis
              </p>
            </div>
          </div>

          <!-- Article 4 -->
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/4B45/production/_131664269_mediaitem131664268.jpg"
              alt="Beluga whale"
              class="w-full h-32 object-cover"
            />
            <div class="p-3">
              <h3 class="text-sm font-semibold mb-1">
                Russian 'spy whale' found dead off Norway
              </h3>
              <p class="text-xs text-gray-600 mb-1">
                The beluga whale - nicknamed Hvaldimir - is suspected of having been trained as a spy by Russia.
              </p>
              <p class="text-xs text-gray-500">
                4 hrs ago | Europe
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Comments column -->
      <div class="bg-white shadow-lg rounded-lg p-4">
        <h2 class="text-xl font-bold mb-4">
          Comments
        </h2>
        <!-- Add your comments component or content here -->
        <p>Comments section placeholder</p>
      </div>
    </div>
  </div>
</template>

<style></style>
