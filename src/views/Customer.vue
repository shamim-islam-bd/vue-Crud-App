<template>
  <div class="container">
    <!-- Spinner  -->
    <div class="row" v-if="loading">
      <div class="col-md-12">
        <Spinner />
      </div>
    </div>

    <!-- error mesage  -->
    <div class="row" v-if="!loading && error">
      <div class="col-md-6 mt-5">
        <div class="alert alert-danger" role="alert">
          {{ error }}
        </div>
      </div>
    </div>

    <div class="row mt-3 m-auto">
      <div class="col-md-8">
        <h1 class="text-success">Customers Info</h1>
        <!-- bootstrap card with image and user info  -->
        <div class="card mb-3" v-if="customers.length > 0">
          <div
            class="row g-0 m-2"
            v-for="customer of customers"
            :key="customer"
          >
            <div class="col-md-4 my-3">
              <img :src="customer.image" alt="..." class="img-fluid" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Name: {{ customer.name }}</h5>
                <span class="card-text">
                  address: {{ customer.address.street }} </span
                ><br />
                <span class="card-text">
                  city: {{ customer.address.city }} </span
                ><br />
                <span class="card-text"> state: web developer </span><br />
                <span class="card-text"> Email: {{ customer.email }} </span>
                <br />
                <span class=""> phone: {{ customer.phone }} </span>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <div class="d-flex flex-row gap-3 px-3">
                <i class="fas fa-eye fa-2x fs-5 text-success bg-dark p-1"></i>
                <i class="fas fa-trash fa-2x fs-5 text-danger bg-dark p-1"></i>
                <i class="fas fa-edit fa-2x fs-5 text-primary bg-dark p-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <h1 class="text-primary">Visual</h1>
        <!-- input name, address, email, city, phone, state list  -->
        <div class="card">
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Enter Address"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-3">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="Enter City"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Enter Phone"
                />
              </div>
              <div class="mb-3">
                <label for="state" class="form-label">State</label>
                <input
                  type="text"
                  class="form-control"
                  id="state"
                  placeholder="Enter State"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "../components/Spinner.vue";
import Customers from "../Customers/Customers";

export default {
  name: "Customer",
  data: function () {
    return {
      loading: true,
      customers: [],
      error: null,
    };
  },
  created: async function () {
    try {
      this.loading = false;
      const response = await Customers.getAllCustomers();
      this.customers = response.data;
      // console.log(res.data);
      this.loading = false;
    } catch (error) {
      this.error = error;
      console.log(error);
      this.loading = false;
    }
  },
  methods: {},
  components: { Spinner },
};
</script>
<style scoped></style>
