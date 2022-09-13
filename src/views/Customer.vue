<template>
  <div class="container">
    <div class="row mt-3 m-auto">
      <div class="col-md-8">
        <h1 class="text-success">Customers Info</h1>
        <!-- bootstrap card with image and user info  -->
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="..."
                class="img-fluid"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Name: John Doe</h5>
                <span class="card-text"> address: web developer </span><br />
                <span class="card-text"> city: web developer </span><br />
                <span class="card-text"> state: web developer </span><br />
                <span class="card-text"> Email: web@gmail.com </span> <br />
                <span class=""> phone: 01750910273 </span>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <div class="d-flex flex-row gap-3 px-3">
                <i class="fas fa-eye fa-2x fs-5 text-success bg-dark p-1 "></i>
                <i class="fas fa-trash fa-2x fs-5 text-danger bg-dark p-1 "></i>
                <i class="fas fa-edit fa-2x fs-5 text-primary bg-dark p-1 "></i>
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
export default {
  name: "Customer",
  methods: {
      getCustomer() {
        axios.get("http://localhost:3000/customers").then((res) => {
          console.log(res.data);
        });
      },
  },
};
</script>
<style scoped></style>
