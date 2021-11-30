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
                <input class="input" type="email" placeholder="Ejemplo, juan@ejemplo.com" v-model="contactEmail"/>
                <span class="icon is-small is-left">
                    <font-awesome-icon icon="envelope"/>
                </span>
            </div>
        </div>
  
        <div class="control">
            <button class="button is-success" @click="saveContact">Guardar</button>
        </div>
    </div>
</template>
  
<script>
    // import axios
    import axios from "axios";
    
    export default {
        name: "AddContact",
        data() {
            return {
                contactName: "",
                contactPhone: "",
                contactAddress: "",
                contactEmail: "",
            };
        },
        methods: {
            // Create New Contact
            async saveContact() {
                try {
                    await axios.post("http://localhost:5000/contacts", {
                        name: this.contactName,
                        phone: this.contactPhone,
                        address: this.contactAddress,
                        email: this.contactEmail,
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