<template>
  <div class="mt4">
    <h1>Thêm Tour Mới</h1>
    <form @submit="addTour">
      <div class="mb-3">
        <label class="form-label">Tên Tour</label>
        <input
          v-model="formData.tour_name"
          type="text"
          class="form-control"
          id="tour_name"
          name="tour_name"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Mô Tả</label>
        <input
          v-model="formData.tour_description"
          type="tour_description"
          class="form-control"
          id="tour_description"
          name="description"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Hình Ảnh</label>
        <input
          v-model="formData.tour_image"
          type="text"
          class="form-control"
          id="tour_image"
          name="tour_image"
        />
      </div>
    <div class="mb-3">
        <label class="form-label">Khu Vực</label>
        <select v-model="formData.area" class="form-control" id="area" name="area">
            <option value="">Chọn Khu Vực</option>
            <option v-for="area in areas" :key="area._id" :value="area.area_slug">{{ area.area }}</option>
        </select>
    </div>
      <div class="mb-3">
        <label class="form-label">Giá Trẻ Em</label>
        <input
          v-model="formData.tour_price_kid"
          type="text"
          class="form-control"
          id="tour_price_kid"
          name="tour_price_kid"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Giá Người Lớn</label>
        <input
          v-model="formData.tour_price_man"
          type="text"
          class="form-control"
          id="tour_price_man"
          name="tour_price_man"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Giá Người Cao Tuổi</label>
        <input
          v-model="formData.tour_price_old"
          type="text"
          class="form-control"
          id="levtour_price_oldel"
          name="tour_price_old"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Thời Tiết</label>
        <input
          v-model="formData.tour_weather"
          type="text"
          class="form-control"
          id="tour_weather"
          name="tour_weather"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Đánh giá</label>
        <input
          v-model="formData.tour_rate"
          type="text"
          class="form-control"
          id="tour_rate"
          name="tour_rate"
        />
      </div>
      <button type="submit" class="btn btn-primary">Thêm</button>
    </form>
  </div>
</template>

<script setup>
const formData = ref({
  tour_name: "",
  tour_description: "",
  tour_image: "",
  area: "",
  tour_price_kid: "",
  tour_price_man: "",
  tour_price_old: "",
  tour_weather: "",
  tour_rate: "",
});

const runtimeConfig = useRuntimeConfig();
const addTour = async (event) => {
  event.preventDefault();

  // Kiểm tra các trường dữ liệu
  for (const key in formData.value) {
    if (formData.value[key] === "") {
      alert(`Vui lòng nhập giá trị cho trường ${key.replace('_', ' ')}`);
      return; // Dừng việc gửi dữ liệu khi có trường dữ liệu thiếu
    }
  }

  // Gửi dữ liệu khi không có trường dữ liệu nào thiếu
  const { data: tours } = await useFetch(
    `${runtimeConfig.public.apiBase}/tours/create`,
    { method: "post", body: formData.value }
  );
  alert("Thêm Thành Công");
};
const { data: areas, refresh: refreshAreas } = await useFetch(`${runtimeConfig.public.apiBase}/areas`, { method: 'get' })
</script>

<style></style>

