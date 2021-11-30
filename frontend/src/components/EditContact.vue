<template>
  <div>
    <div class="field">
      <label class="label">Nombre</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Nombre completo" v-model="contactName"/>
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user"/>
        </span>
       </div>
    </div>
  
    <div class="field">
      <label class="label">Teléfono</label>
      <div class="control has-icons-left">
        <input class="input" type="tel" placeholder="(667) 123 4567" v-model="contactPhone"/>
        <span class="icon is-small is-left">
          <font-awesome-icon icon="phone"/>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Dirección</label>
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Dirección" v-model="contactAddress"/>
        <span class="icon is-small is-left">
          <font-awesome-icon icon="map-marker-alt"/>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Correo electrónico</label>
      <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Ejemplo, juan@example.com" v-model="contactEmail"/>
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope"/>
        </span>
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateContact">Actualizar</button>
    </div>
  </div>
</template>
  
<script>
  // import axios
  import axios from "axios";
    
  export default {
    name: "EditContact",
    data() {
      return {
        contactName: "",
        contactPhone: "",
        contactAddress: "",
        contactEmail: "",
      };
    },
    created: function () {
      this.getContactById();
    },
    methods: {
      // Get Contact By Id
      async getContactById() {
        try {
          const response = await axios.get(`http://localhost:5000/contacts/${this.$route.params.id}`);
          this.contactName = response.data.name;
          this.contactPhone = response.data.phone;
          this.contactAddress = response.data.address;
          this.contactEmail = response.data.email;
        } catch (err) {
          console.log(err);
        }
      },
    
      // Update Contact
      async updateContact() {
        try {
          await axios.put(`http://localhost:5000/contacts/${this.$route.params.id}`, {
              contact_name: this.contactName,
              contact_phone: this.contactPhone,
              contact_address: this.contactAddress,
              contact_email: this.contactEmail,
          });
          this.contactName = "";
          this.contactPhone = "";
          this.contactAddress = "";
          this.contactEmail = "";
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
</script>
  
<style>
</style>