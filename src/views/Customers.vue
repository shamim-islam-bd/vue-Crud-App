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
                <RouterLink
                  :to="`/customers/view/${customer.id}`"
                  class="nav-link"
                >
                  <i class="fas fa-eye fa-2x fs-5 text-success bg-dark p-1"></i>
                </RouterLink>
                <RouterLink :to="`/customers/${customer.id}`" class="nav-link">
                  <i
                    class="fas fa-trash fa-2x fs-5 text-danger bg-dark p-1"
                  ></i>
                </RouterLink>
                <RouterLink :to="`/customers/view/${customer.id}`" class="nav-link">
                  <i
                    class="fas fa-edit fa-2x fs-5 text-primary bg-dark p-1"
                  ></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <h1 class="text-primary">Visual</h1>
        <!-- {{customer}} -->
        <div class="card">
          <img
            class="w-25 m-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG2EGatn7jlmjEq8MA6qX0kLv3EX0TyFZr4a7avA&s"
            alt=""
            srcset=""
          />
          <div class="card-body">
            <form @submit.prevent="createpost()">
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
              <div class="mb-3">
                <label for="state" class="form-label">State</label>
                <input
                  v-model="customer.address.state"
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
      customer: {
        name: "",
        image: "",
        address: {
          street: "",
          city: "",
        },
        email: "",
        phone: "",
        state: "",
      },
      group: [],
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
      this.error = error.message;
      console.log(error);
      this.loading = false;
    }
  },
  methods: {
    createpost: async function () {
      try {
        const response = await Customers.createCustomer(this.customer);
        console.log(response);
        this.customers.push(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { Spinner },
};
</script>
<style scoped></style>
