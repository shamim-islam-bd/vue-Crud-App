<template lang="">
  <!-- single customer details page  -->
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

    <div class="row" v-if="!loading && isDone()">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Customer Details</h3>
          </div>
          <!-- {{ customer }} -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <img :src="customer.image" alt="..." class="img-fluid" />

                <!-- customer details  -->
                <div class="card-body">
                  <h5 class="card-title">Name: {{ customer.name }}</h5>
                  <span class="card-text">
                    address: {{ customer.address.suite }}</span
                  ><br />
                  <span class="card-text">
                    city: {{ customer.address.city }}</span
                  ><br />
                  <span class="card-text">
                    state: {{ customer.address.street }} </span
                  ><br />
                  <span class="card-text"> Email: {{ customer.email }}</span>
                  <br />
                  <span class=""> phone: {{ customer.phone }}</span>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <form @submit.prevent="update()">
                      <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input
                          v-model="customer.name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="name" class="form-label">Image Link</label>
                        <input
                          v-model="customer.image"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input
                          v-model="customer.address.street"
                          type="text"
                          class="form-control"
                          id="address"
                          placeholder="Enter Address"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                          v-model="customer.email"
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter Email"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="city" class="form-label">City</label>
                        <input
                          v-model="customer.address.city"
                          type="text"
                          class="form-control"
                          id="city"
                          placeholder="Enter City"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input
                          v-model="customer.phone"
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Enter Phone"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
  name: "CustomerDetails",
  components: {
    Customers,
    Spinner,
  },

  data: function () {
    return {
      loading: false,
      error: null,
      id: this.$route.params.id,
      customer: {},
    };
  },
  created: async function () {
    try {
      this.loading = true;
      const res = await Customers.getCustomerDetails(this.id);
      this.customer = res.data;
      this.loading = false;
    } catch (error) {
      this.error = error.message;
      loading = false;
    }
  },
  methods: {
    isDone: function () {
      return Object.keys(this.customer).length > 0;
    },
    update: async function () {
      try {
        this.loading = true;
        const res = await Customers.updateCustomer(this.id, this.customer);
        this.customer = res.data;
        this.loading = false;
      } catch (error) {
        this.error = error.message;
        loading = false;
      }
    }
  },
};
</script>
<style lang=""></style>
