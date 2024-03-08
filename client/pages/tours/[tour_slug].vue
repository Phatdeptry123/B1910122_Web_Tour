<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img :src="tour && tour.tour_image ? tour.tour_image : ''" class="img-fluid" />
        </div>
        <div class="col-md-8">
          <div class="mt-4">
            <h2 v-if="tour && tour.tour_name" class="mb-3">{{ tour.tour_name }}</h2>
            <p v-else class="mb-4">Đang tải...</p>
            <p class="lead" v-if="tour && tour.tour_description">{{ tour.tour_description }}</p>
            <div v-if="tour">
              <div class="mt-4">
                <h3>Giá vé:</h3>
                <ul class="list-unstyled">
                  <li>Người lớn: {{ tour.tour_price_man }}$</li>
                  <li>Trẻ em: {{ tour.tour_price_kid }}$</li>
                  <li>Người cao tuổi: {{ tour.tour_price_old }}$</li>
                </ul>
              </div>
              <div class="mt-4">
                <button
                  type="button"
                  class="btn btn-primary mr-2"
                  data-toggle="modal"
                  data-target="#callModal"
                >
                  Gọi điện
                </button>
                <button
                  type="button"
                  class="btn btn-success ml-3"
                  data-toggle="modal"
                  data-target="#tourModal"
                >
                  Đặt tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
    const runtimeConfig = useRuntimeConfig();
    const {
      data: tour,
      error,
      isLoading,
    } = useFetch(
      `${runtimeConfig.public.apiBase}/tours/${route.params.tour_slug}`,
      { method: "get" }
    );
    console.log(tour);
    return { tour, error, isLoading };
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
